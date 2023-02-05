import React from "react";

import Title from "../Title";
import Suplier from "../Suplier";

import { SuppliersWrapper } from "./style";

import uaeFlag from "../../Assets/suppliersFlags/AE@2x.png";
import auFlag from "../../Assets/suppliersFlags/AU@2x.png";
import usFlag from "../../Assets/suppliersFlags/US@2x.png";
import ruFlag from "../../Assets/suppliersFlags/RU@2x.png";
import dkFlag from "../../Assets/suppliersFlags/DK@2x.png";
import frFlag from "../../Assets/suppliersFlags/FR@2x.png";
import chFlag from "../../Assets/suppliersFlags/CN@2x.png";
import ukFlag from "../../Assets/suppliersFlags/GB@2x.png";
import itFlag from "../../Assets/suppliersFlags/IT@2x.png";

const Suppliers = () => {
  return (
    <SuppliersWrapper>
      <Title>Suppliers by regione</Title>
      <div>
        <Suplier flag={uaeFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={auFlag} country="Australia" site="shopname.au" />
        <Suplier flag={usFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={ruFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={itFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={dkFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={frFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={uaeFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={chFlag} country="Arabic Emirates" site="shopname.ae" />
        <Suplier flag={ukFlag} country="Arabic Emirates" site="shopname.ae" />
      </div>
    </SuppliersWrapper>
  );
};

export default Suppliers;
