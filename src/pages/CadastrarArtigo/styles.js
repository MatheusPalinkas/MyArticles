import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Form = styled.form`
  margin: 0 auto;
  max-width: 500px;
`;

export const Inline = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonSalvar = styled(Button)`
  background-color: #4fd59e !important;
  color: #fff !important;
  min-width: 200px !important;
  font-size: 18px !important;
  text-align: center;
`;
