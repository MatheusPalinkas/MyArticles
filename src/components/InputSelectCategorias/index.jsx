import React, { useState } from "react";

import SelectCategorias from "../SelectCategorias";
import ToggleButton from "./ToggleButton";
import { Input } from "../../styles";
import { Inline } from "./styles";

const InputSelectCategorias = () => {
  const [adicionar, setAdicionar] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setAdicionar(!adicionar);
  };

  return (
    <Inline>
      {adicionar ? (
        <Input
          variant="outlined"
          label="Adicionar categoria"
          margin="normal"
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
