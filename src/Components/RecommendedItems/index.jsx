import React from "react";
//components
import Title from "../Title";
import RecommendedItem from "../RecommendedItem";
//style
import { ItemsWrapper } from "./style";
//data
import { itemsData } from "./data";


const RecommendedItems = () => {

  return (
    <div>
      <Title>Recommended items</Title>
      <ItemsWrapper>
        {itemsData.map((item, index) => (
          <RecommendedItem
            key={index}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        ))}
      </ItemsWrapper>
    </div>
  );
};

export default RecommendedItems;
