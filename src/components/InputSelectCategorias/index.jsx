import React, { useState, useContext, useEffect, useCallback } from "react";
import Controllers from "../../contexts/Controllers";
import Categoria from "../../models/Categoria";

import SelectCategorias from "../SelectCategorias";
import ToggleButton from "./ToggleButton";

import { Input } from "../../styles";
import { Inline } from "./styles";

const InputSelectCategorias = () => {
  const [adicionar, setAdicionar] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const categoriaControler = useContext(Controllers)["categoria"];

  const getCategorias = useCallback(() => {
    categoriaControler.listar().then((categorias) => setCategorias(categorias));
  }, []);

  useEffect(() => {
    getCategorias();
  }, [getCategorias]);

  const handleToggle = (e) => {
    e.preventDefault();

    if (adicionar) {
      categoriaControler.adicionar(new Categoria(categoria));
      getCategorias();
    }

    setAdicionar(!adicionar);
  };

  return (
    <Inline>
      {adicionar ? (
        <Input
          variant="outlined"
          label="Adicionar categoria"
          margin="normal"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          fullWidth
        />
      ) : (
        <SelectCategorias categorias={categorias} />
      )}
      <ToggleButton adicionar={adicionar} handleToggle={handleToggle} />
    </Inline>
  );
};

export default InputSelectCategorias;
