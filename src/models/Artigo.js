export default class Artigo {
  constructor(nome, link, foto, categoriaId, lido = false, key = 0) {
    this._nome = nome;
    this._link = link;
    this._foto = foto;
    this._lido = lido;
    this._key = key;
    this._categoriaId = categoriaId;
  }

  get nome() {
    return this._nome;
  }
  get link() {
    return this._link;
  }
  get foto() {
    return this._foto;
  }
  get lido() {
    return this._lido;
  }
  get key() {
    return this._key;
  }
  set key(value) {
    this._key = value;
  }
  get categoriaId() {
    return this._categoriaId;
  }
}
