import React from "react";
import { useParams } from "react-router-dom";

import Artigo from "../../models/Artigo";
import Cabecalho from "../../components/Cabecalho";

import { FormControlLabel, Switch } from "@material-ui/core";
import { Tumbl, Button, Inline } from "./styles";
import { Form, Input } from "../../styles";

const artigo = new Artigo(
  "Kanban",
  "",
  "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  5
);
const DescricaoArtigo = () => {
  const { id } = useParams();
  return (
    <>
      <Cabecalho nomePage={artigo.nome} />
      <Tumbl src={artigo.foto} />
      <Form>
        <Inline margin="normal">
          <FormControlLabel control={<Switch />} label="Marcar como lido" />
          <Button>Acessar</Button>
        </Inline>
        <Input
          label="Anotações"
          multiline
          rows={8}
          variant="outlined"
          margin="normal"
        ></Input>
        <Button margin="normal">Salvar</Button>
      </Form>
    </>
  );
};

export default DescricaoArtigo;
