import React from "react";

import DealsAndOffersCard from "../DealsAndOffersCard";
import SupTitle from "../SupTitle";

import { data } from "./data";

import { CountDownWrapper, DealsAndOffersWrapper } from "./style";

const DealsAndOffers = () => {
  return (
    <DealsAndOffersWrapper>
      <div>
        <SupTitle>Deals and offers</SupTitle>
        <div>Hygiene equipments</div>
        <CountDownWrapper>
          <div>
            <div>04</div>
            <div>days</div>
          </div>
          <div>
            <div>13</div>
            <div>Hour</div>
          </div>
          <div>
            <div>34</div>
            <div>Min</div>
          </div>
          <div>
            <div>56</div>
            <div>Sec</div>
          </div>
        </CountDownWrapper>
      </div>
      {data.map((item, index) => (
        <DealsAndOffersCard
          key={index}
          img={item.img}
          name={item.name}
          discount={item.discount}
        />
      ))}
    </DealsAndOffersWrapper>
  );
};

export default DealsAndOffers;
