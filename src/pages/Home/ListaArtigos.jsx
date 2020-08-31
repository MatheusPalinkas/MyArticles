import React, { useCallback, useState, useEffect, useContext } from "react";

import Controllers from "../../contexts/Controllers";

import FiltroArtigos from "./FiltroArtigos";
import CardArtigo from "../../components/CardArtigo";

import { Grid } from "@material-ui/core";

const ListaArtigos = () => {
  const [artigos, setArtigos] = useState([]);
  const [artigosComFiltro, setArtigosComFiltro] = useState([]);

  const artigoController = useContext(Controllers)["artigo"];

  const getArtigos = useCallback(() => {
    artigoController.listar().then((artigos) => {
      setArtigos(artigos);
      setArtigosComFiltro(artigos);
    });
  }, [artigoController]);

  useEffect(() => {
    getArtigos();
  }, [getArtigos]);

  return (
    <>
      <FiltroArtigos
        filtro={(filtros) => {
          setArtigosComFiltro(artigos.filter(filtros));
        }}
      />
      <Grid container style={{ marginTop: 40 }} spacing={2}>
        {artigosComFiltro.map((artigo) => (
          <Grid key={artigo.key} item lg={4} md={4} sm={6} xs={12}>
            <CardArtigo artigo={artigo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListaArtigos;
