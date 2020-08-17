import React from "react";

import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { Select } from "./styles";

const SelectCategorias = () => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="select-outlined-label-categoria">Categoria</InputLabel>
      <Select
        variant="outlined"
        label="Categoria"
        labelId="select-outlined-label-categoria"
        fullWidth
      >
        <MenuItem value="0">Sem categorias</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectCategorias;
