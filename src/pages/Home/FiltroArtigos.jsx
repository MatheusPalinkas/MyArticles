import React, { useCallback, useState, useEffect, useContext } from "react";

import StateCategoria from "../../contexts/StateCategoria";
import Controllers from "../../contexts/Controllers";

import { Input } from "../../styles";
import SelectCategorias from "../../components/SelectCategorias";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";

function FiltroArtigos() {
  const [categoria, setCategoria] = useState(null);
  const [categorias, setCategorias] = useState([]);

  const categoriaControler = useContext(Controllers)["categoria"];

  const getCategorias = useCallback(() => {
    categoriaControler.listar().then((categorias) => setCategorias(categorias));
  }, [categoriaControler]);

  useEffect(() => {
    getCategorias();
  }, [getCategorias]);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Input variant="outlined" label="Nome" margin="normal" fullWidth />
        </Grid>
        <Grid item xs={5}>
          <StateCategoria.Provider value={[categoria, setCategoria]}>
            <SelectCategorias categorias={categorias} />
          </StateCategoria.Provider>
        </Grid>
        <Grid container item xs={2} justify="center" alignItems="center">
          <FormControlLabel control={<Switch />} label="Exibir lidos" />
        </Grid>
      </Grid>
    </form>
  );
}

export default FiltroArtigos;
