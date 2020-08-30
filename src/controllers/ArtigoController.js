import ArtigoService from "../services/ArtigoService";

export default class ArtigoController {
  constructor() {
    this._artigoService = new ArtigoService();
  }

  adicionar(artigo) {
    this._artigoService
      .adicionar(artigo)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  listar() {
    return this._artigoService
      .listar()
      .then((tarefas) => [...tarefas])
      .catch((erro) => {
        alert(erro);
        return "";
      });
  }

  procurar(key) {
    return this._artigoService
      .procurar(key)
      .then((tarefa) => tarefa)
      .catch((erro) => {
        alert(erro);
        return "";
      });
  }
}
