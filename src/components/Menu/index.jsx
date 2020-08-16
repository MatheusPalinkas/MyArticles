import React from "react";
import {
  Header,
  LinkHome,
  IconBook,
  LogoNome,
  ButtonAdicionar,
} from "./styles";

const Menu = () => {
  return (
    <Header>
      <LinkHome>
        <IconBook />
        <LogoNome component="h2">MyArticles</LogoNome>
      </LinkHome>
      <ButtonAdicionar variant="contained">Adicionar artigo</ButtonAdicionar>
    </Header>
  );
};

export default Menu;
