import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Artigo from "../../models/Artigo";
import StateCategoria from "../../contexts/StateCategoria";
import Controllers from "../../contexts/Controllers";

import InputSelectCategorias from "../../components/InputSelectCategorias";
import Cabecalho from "../../components/Cabecalho";

import { FormControlLabel, Switch } from "@material-ui/core";
import { Container, Input, Form } from "../../styles";
import { ButtonSalvar, Inline } from "./styles";

const CadastrarArtigo = () => {
  const { push } = useHistory();

  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [foto, setFoto] = useState("");
  const [lido, setLido] = useState(false);
  const [categoria, setCategoria] = useState(0);

  const artigoControler = useContext(Controllers)["artigo"];
  const states = {
    nome: setNome,
    link: setLink,
    foto: setFoto,
    lido: setLido,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const artigo = new Artigo(nome, link, foto, categoria, "", lido);
    artigoControler.adicionar(artigo);
    push("/");
  };

  const handleChange = (e) => {
    const { type, name } = e.target;

    if (type.toUpperCase() === "CHECKBOX") states[name](e.target.checked);
    if (type.toUpperCase() === "TEXT") states[name](e.target.value);
  };

  return (
    <>
      <Cabecalho nomePage="Novo Artigo" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            variant="outlined"
            label="Nome"
            name="nome"
            margin="normal"
            value={nome}
            onChange={handleChange}
            fullWidth
          />
          <Input
            variant="outlined"
            label="Link para o artigo"
            margin="normal"
            name="link"
            value={link}
            onChange={handleChange}
            fullWidth
          />
          <Input
            variant="outlined"
            label="Link para tumblr"
            margin="normal"
            name="foto"
            value={foto}
            onChange={handleChange}
            fullWidth
          />
          <StateCategoria.Provider value={[categoria, setCategoria]}>
            <InputSelectCategorias />
          </StateCategoria.Provider>
          <Inline>
            <FormControlLabel
              control={
                <Switch name="lido" value={lido} onChange={handleChange} />
              }
              label="Marcar como lido"
            />
            <ButtonSalvar type="submit">Salvar</ButtonSalvar>
          </Inline>
        </Form>
      </Container>
    </>
  );
};

export default CadastrarArtigo;
