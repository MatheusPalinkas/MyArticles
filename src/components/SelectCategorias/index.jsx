import React from "react";

import { FormControl, MenuItem } from "@material-ui/core";
import { Select, Label } from "./styles";

const SelectCategorias = ({ categorias }) => {
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
          {categorias.map((categoria) => (
            <MenuItem key={categoria.key} value={categoria.key}>
              {categoria.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCategorias;
