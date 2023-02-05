import React from "react";
import { ItemWrapper } from "./style";

const SuggestedItem = ({name , price , img}) => {
  
  return (
    <ItemWrapper>
      <div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <div>
        <img src={img} alt="item" />
      </div>
    </ItemWrapper>
  );
};

export default SuggestedItem;
