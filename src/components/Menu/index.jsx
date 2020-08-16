import React from "react";
import {
  Header,
  LinkHome,
  LinkNovoArtigo,
  IconBook,
  LogoNome,
  ButtonAdicionar,
} from "./styles";

const Menu = () => {
  return (
    <Header>
      <LinkHome to="/">
        <IconBook />
        <LogoNome component="h2">MyArticles</LogoNome>
      </LinkHome>
      <LinkNovoArtigo to="/novo/artigo">
        <ButtonAdicionar variant="contained">Adicionar artigo</ButtonAdicionar>
      </LinkNovoArtigo>
    </Header>
  );
};

export default Menu;
