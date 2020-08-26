export default class Categoria {
  constructor(nome, key = 0) {
    this._nome = nome;
    this._key = key;
  }

  get nome() {
    return this._nome;
  }

  get key() {
    return this._key;
  }
}
