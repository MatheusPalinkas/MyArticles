import styled from "styled-components";
import { Select as SelectUI, InputLabel } from "@material-ui/core";

export const Label = styled(InputLabel)`
  color: #767777 !important;
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  background: red;
  border: none;
  width: 50px;
  height: 50px;
`;

export const Select = styled(SelectUI)`
  fieldset {
    border: 2px solid #767777 !important;
  }
`;
