export default class Artigo {
  constructor(
    nome,
    link,
    foto,
    categoriaId,
    observacao,
    lido = false,
    key = 0
  ) {
    this._nome = nome;
    this._link = link;
    this._foto = foto;
    this._observacao = observacao;
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
  get observacao() {
    return this._observacao;
  }
  get lido() {
    return this._lido;
  }
  get key() {
    return this._key;
  }
  get categoriaId() {
    return this._categoriaId;
  }

  set observacao(value) {
    this._observacao = value;
  }
  set lido(value) {
    this._lido = value;
  }
  set key(value) {
    this._key = value;
  }
}
