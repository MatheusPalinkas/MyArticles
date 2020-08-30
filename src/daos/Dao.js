export default class Dao {
  constructor(connection, store) {
    this._connection = connection;
    this._store = store;
  }

  adicionar(model) {
    return new Promise((resolve, reject) => {
      let request = this._getStore().add(model);

      request.onsuccess = (e) => resolve("Adicionada com sucesso");
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Erro ao adicionar");
      };
    });
  }

  atualizar(key, model) {
    return new Promise((resolve, reject) => {
      let request = this._getStore().put(model, key);

      request.onsuccess = (e) => resolve("Atualizada com sucesso");
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Erro ao atualizar");
      };
    });
  }

  listar() {
    return new Promise((resolve, reject) => {
      let cursor = this._getStore().openCursor();

      let models = [];
      cursor.onsuccess = (e) => {
        let atual = e.target.result;
        if (atual) {
          let dado = atual.value;
          let key = atual.key;
          models.push(this._formatModel(dado, key));
          atual.continue();
        } else {
          resolve(models);
        }
      };
      cursor.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possivel listar os artigos salvos");
      };
    });
  }

  _formatModel(data, key) {
    return { key, ...data };
  }

  _getStore() {
    return this._connection
      .transaction([this._store], "readwrite")
      .objectStore(this._store);
  }
}
