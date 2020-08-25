import ConnectionFactory from "./ConnectionFactory";
import ArtigoDao from "../daos/ArtigoDao";

export default class ArtigoService {
  constructor() {}

  listar() {
    return this._getArtigoDao().then((dao) => dao.listar());
  }

  adicionar(artigo) {
    return this._getArtigoDao().then((dao) => dao.adicionar(artigo));
  }

  _getArtigoDao() {
    return ConnectionFactory.getConnection().then(
      (connection) => new ArtigoDao(connection)
    );
  }
}
