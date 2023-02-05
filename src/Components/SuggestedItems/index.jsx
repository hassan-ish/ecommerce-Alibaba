import React from "react";

import Button from "../Button";
import SupTitle from "../SupTitle";
import SuggestedItem from "../SuggestedItem";

import { SuggestedItemsWrapper } from "./style";

const SuggestedItems = ({ pic, name, data }) => {
  return (
    <SuggestedItemsWrapper mainImg={pic}>
      <div>
        <SupTitle>{name}</SupTitle>
        <Button bgColor={"#FFF"}>Source now</Button>
      </div>
      <div>
        {data?.map((item) => (
          <SuggestedItem name={item.name} price={item.price} img={item.img} />
        ))}
      </div>
    </SuggestedItemsWrapper>
  );
};

export default SuggestedItems;
