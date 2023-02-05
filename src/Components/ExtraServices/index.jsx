import React from "react";

//component
import Title from "../Title";
import ServiceCard from "../ServiceCard";

// style
import { CardsWrapper, ExtraServicesWrapper } from "./style";
//data
import { serviceCardsData } from "./data";

const ExtraServices = () => {
  return (
    <ExtraServicesWrapper>
      <Title>Our extra services</Title>
      <CardsWrapper>
        {serviceCardsData.map((element, index) => (
          <ServiceCard
            key={index}
            img={element.img}
            text={element.text}
            icon={element.icon}
          />
        ))}
      </CardsWrapper>
    </ExtraServicesWrapper>
  );
};

export default ExtraServices;
