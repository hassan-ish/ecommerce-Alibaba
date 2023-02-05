import React from "react";
import { ButtonWrapper } from "./style";

const Button = ({bgColor , children}) => {

  return <ButtonWrapper {...{bgColor}}>{children}</ButtonWrapper>;
};

export default Button;
