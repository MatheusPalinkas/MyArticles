import styled from "styled-components";
import { Select as SelectUI, InputLabel } from "@material-ui/core";

export const Label = styled(InputLabel)`
  & .MuiFormLabel-root {
    color: #767777 !important;
  }
`;

export const Select = styled(SelectUI)`
  max-height: 56px;
  & .MuiInputBase-input {
    color: #767777 !important;
    border: 2px solid #767777 !important;
  }
  & .MuiInputBase-input:hover {
    border: 2px solid #767777 !important;
  }
  & .MuiFormLabel-root .Mui-focused {
    color: #767777 !important;
  }
`;
