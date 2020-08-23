import React from "react";

import Cabecalho from "../../components/Cabecalho";
import FiltroArtigos from "./FiltroArtigos";
import ListaArtigos from "./ListaArtigos";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Cabecalho nomePage="Artigos salvos" />
      <Container>
        <FiltroArtigos />
        <ListaArtigos />
      </Container>
    </>
  );
};

export default Home;
