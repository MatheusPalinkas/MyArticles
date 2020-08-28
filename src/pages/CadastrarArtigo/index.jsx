import React, { useState } from "react";

import InputSelectCategorias from "../../components/InputSelectCategorias";
import Cabecalho from "../../components/Cabecalho";

import { FormControlLabel, Switch } from "@material-ui/core";
import { Container, Input, Form } from "../../styles";
import { ButtonSalvar, Inline } from "./styles";

const CadastrarArtigo = () => {
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [foto, setFoto] = useState("");
  const [lido, setLido] = useState(false);

  const states = {
    nome: setNome,
    link: setLink,
    foto: setFoto,
    lido: setLido,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <InputSelectCategorias />
          <Inline>
            <FormControlLabel
              control={
                <Switch name="lido" value={lido} onChange={handleChange} />
              }
              label="Marcar como lido"
            />
            <ButtonSalvar>Salvar</ButtonSalvar>
          </Inline>
        </Form>
      </Container>
    </>
  );
};

export default CadastrarArtigo;
