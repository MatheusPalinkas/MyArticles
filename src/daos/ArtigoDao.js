import Artigo from "../models/Artigo";
import Dao from "./Dao";

export default class ArtigoDao extends Dao {
  constructor(connection) {
    super(connection, "artigos");
  }
  _formatModel(data, key) {
    return new Artigo(
      data._nome,
      data._link,
      data._foto,
      data._categoriaId,
      data._observacao || "",
      data._lido || false,
      key
    );
  }
}
