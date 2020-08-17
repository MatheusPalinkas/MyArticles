import React from "react";

import { Input } from "../../styles";
import SelectCategorias from "../../components/SelectCategorias";
import { Grid } from "@material-ui/core";

function FiltroArtigos() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Input variant="outlined" label="Nome" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <SelectCategorias />
        </Grid>
      </Grid>
    </form>
  );
}

export default FiltroArtigos;
