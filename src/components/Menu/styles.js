import { Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Book } from "@material-ui/icons";

export const Header = styled(Toolbar)`
  background-color: #297ce4;
  display: flex;
  justify-content: space-between;
`;

export const LinkHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none !important;
`;

export const LinkNovoArtigo = styled(Link)`
  cursor: pointer;
  text-decoration: none !important;
`;

export const IconBook = styled(Book)`
  color: #fff;
  margin-right: 10px;
  width: 30px !important;
  height: 30px !important;
`;

export const LogoNome = styled(Typography)`
  color: #fff;
  font-weight: bold !important;
  font-size: 30px !important;
  line-height: 47px;
`;

export const ButtonAdicionar = styled(Button)`
  background-color: #4fd59e !important;
  color: #fff !important;
`;
