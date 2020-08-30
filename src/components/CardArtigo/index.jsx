import React, { useState, useContext } from "react";
import Controllers from "../../contexts/Controllers";
import { Card } from "@material-ui/core";
import {
  TituloCard,
  CardActions,
  CardMedia,
  BookmarkOutlined,
  BookmarkSolid,
  More,
  Link,
} from "./styles";

const ActionsArtigo = ({ artigo }) => {
  const [lido, setLido] = useState(artigo.lido);
  const artigoController = useContext(Controllers)["artigo"];

  const handleLido = (e) => {
    e.preventDefault();
    artigo.lido = !lido;
    artigoController.atualizar(artigo.key, artigo);
    setLido(!lido);
  };

  return (
    <div>
      {lido ? (
        <BookmarkSolid onClick={handleLido} />
      ) : (
        <BookmarkOutlined onClick={handleLido} />
      )}
      <Link to={`/artigo/${artigo.key}`}>
        <More />
      </Link>
    </div>
  );
};

const CardArtigo = ({ artigo }) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt={artigo.nome}
          src={artigo.foto}
          title={artigo.nome}
        />
        <CardActions>
          <TituloCard component="strong" variant="h5">
            {artigo.nome}
          </TituloCard>
          <ActionsArtigo artigo={artigo} />
        </CardActions>
      </Card>
    </>
  );
};

export default CardArtigo;
