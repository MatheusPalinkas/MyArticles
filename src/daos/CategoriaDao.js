import Categoria from "../models/Categoria";
import Dao from "./Dao";

export default class CategoriaDao extends Dao {
  constructor(connection) {
    super(connection, "categorias");
  }

  _formatModel(data, key) {
    return new Categoria(data._nome, key);
  }
}
