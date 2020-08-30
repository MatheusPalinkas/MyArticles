import React from "react";

import Cabecalho from "../../components/Cabecalho";
import ListaArtigos from "./ListaArtigos";
import { Container } from "../../styles";

const Home = () => {
  return (
    <>
      <Cabecalho nomePage="Artigos salvos" />
      <Container>
        <ListaArtigos />
      </Container>
    </>
  );
};

export default Home;
