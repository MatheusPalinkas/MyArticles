import React from "react";

import Cabecalho from "../../components/Cabecalho";
import FiltroArtigos from "./FiltroArtigos";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Cabecalho nomePage="Artigos salvos" />
      <Container>
        <FiltroArtigos />
      </Container>
    </>
  );
};

export default Home;
