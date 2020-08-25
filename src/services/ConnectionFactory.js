const version = 1;
const banco = "myArticles";
const stores = ["artigos", "categorias"];

let connection = null;
let close = null;

export default class ConnectionFactory {
  constructor() {
    throw new Error("Não é possivel criar instancia de ConnectionFactory");
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      let openRequest = window.indexedDB.open(banco, version);

      openRequest.onupgradeneeded = (e) => {
        ConnectionFactory._createStores(e.target.result);
      };

      openRequest.onsuccess = (e) => {
        if (!connection) {
          connection = e.target.result;
          close = connection.close.bind(connection);
          connection.close = function () {
            throw new Error("Você não pode fechar a conexão diretamente");
          };
        }
        resolve(connection);
      };

      openRequest.onerror = (e) => {
        console.log(e.target.error);
        reject(e.target.error.name);
      };
    });
  }

  static closeConnection() {
    if (connection) {
      close();
      connection = null;
    }
  }

  static _createStores(connection) {
    stores.forEach((store) => {
      if (connection.objectStoreNames.contains(store))
        connection.deleteObjectStore(store);

      connection.createObjectStore(store, { autoIncrement: true });
    });
  }
}
