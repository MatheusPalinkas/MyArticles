import ConnectionFactory from "./ConnectionFactory";

export default class Service {
  constructor(dao) {
    this._dao = dao;
  }

  listar() {
    return this._getDao().then((dao) => dao.listar());
  }

  adicionar(model) {
    delete model._key;
    return this._getDao().then((dao) => dao.adicionar(model));
  }

  _getDao() {
    const Model = this._dao;
    return ConnectionFactory.getConnection().then(
      (connection) => new Model(connection)
    );
  }
}
