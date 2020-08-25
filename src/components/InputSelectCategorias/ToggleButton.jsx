import React from "react";
import { ButtonIcon, SaveIcon, AddBoxIcon } from "./styles";

const ToggleButton = ({ adicionar, handleToggle }) => {
  return (
    <ButtonIcon onClick={handleToggle}>
      {adicionar ? <SaveIcon /> : <AddBoxIcon />}
    </ButtonIcon>
  );
};

export default ToggleButton;
