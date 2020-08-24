import styled from "styled-components";
import { Button as ButtonUI } from "@material-ui/core";

export const Tumbl = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src || "./"});
`;

export const Inline = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(ButtonUI)`
  background-color: #4fd59e !important;
  color: #fff !important;
  min-width: 200px !important;
  font-size: 18px !important;
  text-align: center;
  margin-left: auto !important;
`;
