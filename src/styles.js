import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Input = styled(TextField)`
  & label.Mui-focused {
    color: #767777;
  }
  & :hover fieldset {
    border: 2px solid #a1b0c0 !important;
  }
  & input:valid + fieldset {
    border: 2px solid #767777;
  }
  & input:valid:focus + fieldset {
    border: 2px solid #a1b0c0;
  }
`;
