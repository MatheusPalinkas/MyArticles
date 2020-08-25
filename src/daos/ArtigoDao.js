import Artigo from "../models/Artigo";

export default class ArtigoDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "artigos";
  }

  adicionar(artigo) {
    return new Promise((resolve, reject) => {
      let request = this._getStore().add(artigo);

      request.onsuccess = (e) => resolve("Artigo adicionada com sucesso");
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Erro ao adicionar artigo");
      };
    });
  }

  listar() {
    return new Promise((resolve, reject) => {
      let cursor = this._getStore().openCursor();

      let artigos = [];
      cursor.onsuccess = (e) => {
        let atual = e.target.result;
        if (atual) {
          let dado = atual.value;
          let key = atual.key;
          artigos.push(
            new Artigo(
              dado._nome,
              dado._link,
              dado._foto,
              dado._categoriaId,
              dado._lido || false,
              key
            )
          );
          atual.continue();
        } else {
          resolve(artigos);
        }
      };
      cursor.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possivel listar os artigos salvos");
      };
    });
  }

  _getStore() {
    return this._connection
      .transaction([this._store], "readwrite")
      .objectStore(this._store);
  }
}
