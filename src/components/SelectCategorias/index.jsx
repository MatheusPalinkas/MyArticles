import React, { useContext } from "react";
import StateCategoria from "../../contexts/StateCategoria";

import { FormControl, MenuItem } from "@material-ui/core";
import { Select, Label } from "./styles";

const SelectCategorias = ({ categorias }) => {
  const state = useContext(StateCategoria);
  const [categoria, setCategoria] = state;

  return (
    <>
      <FormControl variant="outlined" margin="normal" fullWidth>
        <Label id="select-outlined-label-categoria">Categoria</Label>
        <Select
          variant="outlined"
          label="Categoria"
          margin="normal"
          labelId="select-outlined-label-categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          fullWidth
        >
          <MenuItem value={0}>Sem categoria</MenuItem>
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
