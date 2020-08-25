import styled from "styled-components";
import { Save, AddBox } from "@material-ui/icons";

export const ButtonIcon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 50px;
  height: 50px;
`;

export const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SaveIcon = styled(Save)`
  width: 35px !important;
  height: 35px !important;
  color: #444;
`;

export const AddBoxIcon = styled(AddBox)`
  width: 35px !important;
  height: 35px !important;
  color: #444;
`;
