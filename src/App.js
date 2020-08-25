import React from "react";
import "fontsource-roboto";

import ArtigoController from "./controllers/ArtigoController";
import Controllers from "./contexts/Controllers";
import Router from "./router";

import "./index.css";

const App = () => {
  return (
    <Controllers.Provider
      value={{
        artigo: new ArtigoController(),
      }}
    >
      <Router />
    </Controllers.Provider>
  );
};

export default App;
