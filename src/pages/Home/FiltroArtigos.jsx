import React from "react";

import { Input } from "../../styles";
import SelectCategorias from "../../components/SelectCategorias";
import { Grid, FormControlLabel, Switch } from "@material-ui/core";

function FiltroArtigos() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Input variant="outlined" label="Nome" fullWidth />
        </Grid>
        <Grid item xs={5}>
          <SelectCategorias />
        </Grid>
        <Grid container item xs={2} justify="center" alignItems="center">
          <FormControlLabel control={<Switch />} label="Exibir lidos" />
        </Grid>
      </Grid>
    </form>
  );
}

export default FiltroArtigos;
