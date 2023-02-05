import React from "react";
import { DealsAndOffersCardWrapper } from "./style";

const DealsAndOffersCard = ({ img, name, discount }) => {
  return (
    <DealsAndOffersCardWrapper>
      <div>
        <img src={img} alt="item pic" />
      </div>
      <div>{name}</div>
      <div>{discount}</div>
    </DealsAndOffersCardWrapper>
  );
};

export default DealsAndOffersCard;
