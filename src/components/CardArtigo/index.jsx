import React, { useState } from "react";
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

const ActionsArtigo = ({ defaultLido, id }) => {
  const [lido, setLido] = useState(defaultLido);

  const handleLido = (e) => {
    e.preventDefault();
    setLido(!lido);
  };

  return (
    <div>
      {lido ? (
        <BookmarkSolid onClick={handleLido} />
      ) : (
        <BookmarkOutlined onClick={handleLido} />
      )}
      <Link to={`/artigo/${id}`}>
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
          <ActionsArtigo defaultLido={artigo.lido} id={artigo.key} />
        </CardActions>
      </Card>
    </>
  );
};

export default CardArtigo;
