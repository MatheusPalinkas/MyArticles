import React, { useState, useContext } from "react";
import Controllers from "../../contexts/Controllers";

import SelectCategorias from "../SelectCategorias";
import ToggleButton from "./ToggleButton";

import { Input } from "../../styles";
import { Inline } from "./styles";

const InputSelectCategorias = () => {
  const [adicionar, setAdicionar] = useState(false);
  const [categoria, setCategoria] = useState("");
  //const { categoria } = useContext(Controllers);

  const handleToggle = (e) => {
    e.preventDefault();

    if (adicionar) {
      //adicionar  nova categoria
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
        <SelectCategorias />
      )}
      <ToggleButton adicionar={adicionar} handleToggle={handleToggle} />
    </Inline>
  );
};

export default InputSelectCategorias;
