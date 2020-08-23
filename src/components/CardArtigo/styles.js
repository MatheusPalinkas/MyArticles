import styled from "styled-components";
import {
  Typography,
  CardActions as CardActionsUI,
  CardMedia as CardMediaUI,
} from "@material-ui/core";
import {
  BookmarkBorderOutlined,
  BookmarkOutlined as BookmarkOutlinedUI,
  MoreVert,
} from "@material-ui/icons";

export const TituloCard = styled(Typography)`
  font-size: 25px;
  line-height: 29px;
  color: #444;
`;

export const CardActions = styled(CardActionsUI)`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const CardMedia = styled(CardMediaUI)`
  height: 200px !important;
`;

export const BookmarkOutlined = styled(BookmarkBorderOutlined)`
  color: #444444;
  height: 30px !important;
  width: 30px !important;
  cursor: pointer;
`;

export const BookmarkSolid = styled(BookmarkOutlinedUI)`
  color: #444444;
  height: 30px !important;
  width: 30px !important;
  cursor: pointer;
`;

export const More = styled(MoreVert)`
  color: #444444;
  height: 30px !important;
  width: 30px !important;
  cursor: pointer;
  margin-left: 5px;
`;
