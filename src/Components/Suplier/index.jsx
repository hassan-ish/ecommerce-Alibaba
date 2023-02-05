import React from "react";
import { SuplierWrapper } from "./style";

const Suplier = (props) => {

  return (
    <SuplierWrapper>
      <div>
        <img src={props.flag} alt="Country flag" />
      </div>
      <div>
        <div>{props.country}</div>
        <div>{props.site}</div>
      </div>
    </SuplierWrapper>
  );
};

export default Suplier;
