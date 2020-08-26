import ArtigoDao from "../daos/ArtigoDao";
import Service from "./Service";

export default class ArtigoService extends Service {
  constructor() {
    super(ArtigoDao);
  }
}
