import React, { useCallback, useState, useEffect, useContext } from "react";
import Controllers from "../../contexts/Controllers";
import { useParams } from "react-router-dom";

import Artigo from "../../models/Artigo";
import Cabecalho from "../../components/Cabecalho";

import { FormControlLabel, Switch } from "@material-ui/core";
import { Tumbl, Button, Inline } from "./styles";
import { Form, Input } from "../../styles";

const DescricaoArtigo = () => {
  const { key } = useParams();
  const [artigo, setArtigo] = useState(new Artigo());
  const artigoController = useContext(Controllers)["artigo"];

  const getArtigo = useCallback(() => {
    artigoController.procurar(key).then((artigo) => setArtigo(artigo));
  }, [artigoController, key]);

  useEffect(() => {
    getArtigo();
  }, [getArtigo]);

  return (
    <>
      <Cabecalho nomePage={artigo.nome} />
      <Tumbl src={artigo.foto} />
      <Form>
        <Inline margin="normal">
          <FormControlLabel
            control={<Switch value={artigo.lido} />}
            label="Marcar como lido"
          />
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
