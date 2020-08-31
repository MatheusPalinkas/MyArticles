import React, { useCallback, useState, useEffect, useContext } from "react";
import Controllers from "../../contexts/Controllers";
import { useParams, useHistory } from "react-router-dom";

import Artigo from "../../models/Artigo";
import Cabecalho from "../../components/Cabecalho";

import { FormControlLabel } from "@material-ui/core";
import { Tumbl, Button, Inline } from "./styles";
import { Form, Input, Switch } from "../../styles";

const DescricaoArtigo = () => {
  const { key } = useParams();
  const { push } = useHistory();
  const [artigo, setArtigo] = useState(new Artigo());
  const [lido, setLido] = useState(false);
  const [observacao, setObservacao] = useState("");
  const artigoController = useContext(Controllers)["artigo"];

  const getArtigo = useCallback(() => {
    artigoController.procurar(key).then((artigo) => setArtigo(artigo));
  }, [artigoController, key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    artigo.observacao = observacao;
    artigo.lido = lido;
    artigoController.atualizar(key, artigo);
    push("/");
  };

  useEffect(() => {
    getArtigo();
  }, [getArtigo]);

  useEffect(() => {
    setLido(artigo.lido);
    setObservacao(artigo.observacao);
  }, [artigo]);

  return (
    <>
      <Cabecalho nomePage={artigo.nome} />
      <Tumbl src={artigo.foto} />
      <Form onSubmit={handleSubmit}>
        <Inline margin="normal">
          <FormControlLabel
            control={
              <Switch
                checked={lido}
                onChange={(e) => setLido(e.target.checked)}
              />
            }
            label="Marcar como lido"
          />
          <Button component="a" href={artigo.link} target="blank">
            Acessar
          </Button>
        </Inline>
        <Input
          label="Anotações"
          multiline
          rows={8}
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
          variant="outlined"
          margin="normal"
        ></Input>
        <Button type="submit" margin="normal">
          Salvar
        </Button>
      </Form>
    </>
  );
};

export default DescricaoArtigo;
