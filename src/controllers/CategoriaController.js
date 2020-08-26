import CategoriaService from "../services/CategoriaService";

export default class CategoriaController {
  constructor() {
    this._categoriaService = new CategoriaService();
  }

  adicionar(categoria) {
    this._categoriaService
      .adicionar(categoria)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  listar() {
    return this._categoriaService
      .listar()
      .then((categorias) => [...categorias])
      .catch((erro) => {
        alert(erro);
        return "";
      });
  }
}
