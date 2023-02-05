import React from "react";

import { IconWrapper, ServiceCardWrapper } from "./style";

const ServiceCard = ({ img, icon, text }) => {
  return (
    <ServiceCardWrapper>
      <div>
        <img src={img} alt="Service" />
      </div>
      <div>
        <div>{text}</div>
        <IconWrapper>{icon}</IconWrapper>
      </div>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
