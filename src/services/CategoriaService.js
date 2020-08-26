import CategoriaDao from "../daos/CategoriaDao";
import Service from "./Service";

export default class CategoriaService extends Service {
  constructor() {
    super(CategoriaDao);
  }
}
