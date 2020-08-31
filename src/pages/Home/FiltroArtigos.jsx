import React, { useCallback, useState, useEffect, useContext } from "react";

import StateCategoria from "../../contexts/StateCategoria";
import Controllers from "../../contexts/Controllers";

import { Input, Switch } from "../../styles";
import SelectCategorias from "../../components/SelectCategorias";
import { Grid, FormControlLabel } from "@material-ui/core";

function FiltroArtigos() {
  const [lido, setLido] = useState(false);
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState(0);
  const [categorias, setCategorias] = useState([]);

  const categoriaControler = useContext(Controllers)["categoria"];

  const getCategorias = useCallback(() => {
    categoriaControler.listar().then((categorias) => setCategorias(categorias));
  }, [categoriaControler]);

  useEffect(() => {
    getCategorias();
  });

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Input
            variant="outlined"
            label="Nome"
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
          <StateCategoria.Provider value={[categoria, setCategoria]}>
            <SelectCategorias categorias={categorias} />
          </StateCategoria.Provider>
        </Grid>
        <Grid container item xs={2} justify="center" alignItems="center">
          <FormControlLabel
            control={
              <Switch
                checked={lido}
                onChange={(e) => setLido(e.target.checked)}
              />
            }
            label="Exibir lidos"
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default FiltroArtigos;
