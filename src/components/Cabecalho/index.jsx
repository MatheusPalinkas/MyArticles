import React from "react";
import { Container, Pagina } from "./styles";

const Cabecalho = ({ nomePage }) => {
  return (
    <Container>
      <Pagina>{nomePage}</Pagina>
    </Container>
  );
};

export default Cabecalho;
