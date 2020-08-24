import React from "react";

import SelectCategorias from "../../components/SelectCategorias";
import Cabecalho from "../../components/Cabecalho";

import { FormControlLabel, Switch } from "@material-ui/core";
import { Container, Input, Form } from "../../styles";
import { ButtonSalvar, Inline } from "./styles";

const CadastrarArtigo = () => {
  return (
    <>
      <Cabecalho nomePage="Novo Artigo" />
      <Container>
        <Form>
          <Input variant="outlined" label="Nome" margin="normal" fullWidth />
          <Input
            variant="outlined"
            label="Link para o artigo"
            margin="normal"
            fullWidth
          />
          <Input
            variant="outlined"
            label="Link para tumblr"
            margin="normal"
            fullWidth
          />
          <SelectCategorias />
          <Inline>
            <FormControlLabel control={<Switch />} label="Marcar como lido" />
            <ButtonSalvar>Salvar</ButtonSalvar>
          </Inline>
        </Form>
      </Container>
    </>
  );
};

export default CadastrarArtigo;
