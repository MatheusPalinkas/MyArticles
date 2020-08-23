import React from "react";
import CardArtigo from "../../components/CardArtigo";
import { Grid } from "@material-ui/core";
import Artigo from "../../models/Artigo";

const artigos = [
  new Artigo(
    "Kanban",
    "",
    "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    5
  ),
];

const ListaArtigos = () => {
  return (
    <>
      <Grid container style={{ marginTop: 40 }}>
        {artigos.map((artigo) => (
          <Grid key={artigo.key} item lg={4} md={6} xs={12}>
            <CardArtigo artigo={artigo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListaArtigos;
