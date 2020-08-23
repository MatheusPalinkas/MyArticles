import React from "react";

import { FormControl, MenuItem } from "@material-ui/core";
import { Select, Label } from "./styles";

const SelectCategorias = () => {
  return (
    <>
      <FormControl variant="outlined" margin="normal" fullWidth>
        <Label id="select-outlined-label-categoria">Categoria</Label>
        <Select
          variant="outlined"
          label="Categoria"
          labelId="select-outlined-label-categoria"
          fullWidth
        >
          <MenuItem value="0">Sem categorias</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCategorias;
