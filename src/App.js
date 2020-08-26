import React from "react";
import "fontsource-roboto";

import CategoriaController from "./controllers/CategoriaController";
import ArtigoController from "./controllers/ArtigoController";
import Controllers from "./contexts/Controllers";
import Router from "./router";

import "./index.css";

const App = () => {
  return (
    <Controllers.Provider
      value={{
        artigo: new ArtigoController(),
        categoria: new CategoriaController(),
      }}
    >
      <Router />
    </Controllers.Provider>
  );
};

export default App;
