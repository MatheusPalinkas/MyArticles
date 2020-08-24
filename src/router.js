import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import CadastrarArtigo from "./pages/CadastrarArtigo";
import DescricaoArtigo from "./pages/DescricaoArtigo";

export default function Routes() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/novo/artigo" component={CadastrarArtigo} />
        <Route exact path="/artigo/:id" component={DescricaoArtigo} />
      </Switch>
    </BrowserRouter>
  );
}
