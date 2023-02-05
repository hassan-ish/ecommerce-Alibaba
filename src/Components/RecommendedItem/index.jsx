import React from "react";

import { ItemWrapper } from "./style";
const RecommendedItem = ({ img, price, description }) => {
  return (
    <ItemWrapper>
      <div>
        <img src={img} alt={"item pic"} />
      </div>
      <div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    </ItemWrapper>
  );
};

export default RecommendedItem;
