import React from "react";

//assets
import avatar from "../../Assets/Avatar.png";
//component
import Button from "../Button";

//style
import {
  CardWrapper,
  MainSectionWrapper,
  MenuSection,
  TrindingWrapper,
  UserFormWrapper,
} from "./style";
export const MainSection = () => {
  return (
    <MainSectionWrapper>
      <div>
        <div>Automobiles</div>
        <div>Clothes and wear</div>
        <div>Home interiors</div>
        <div>Computer and tech</div>
        <div>Tools, equipments</div>
        <div>Sports and outdoor</div>
        <div>Animal and pets</div>
        <div>Machinery tools</div>
        <div>More category</div>
      </div>

      <TrindingWrapper>
        <div>
          <div>Latest trending</div>
          <div>Electronic items</div>
          <Button bgColor="#FFFFFF">Learn more</Button>
        </div>
      </TrindingWrapper>

      <MenuSection>
        <UserFormWrapper>
          <div>
            <img src={avatar} alt="pic" />
            <div>Hi, user let’s get stated</div>
          </div>
          <Button>Join now</Button>
          <Button bgColor="#FFFFFF">Log in</Button>
        </UserFormWrapper>

        <CardWrapper bgColor="#F38332">
          Get US $10 off with a new supplier
        </CardWrapper>

        <CardWrapper bgColor="#55BDC3">
          Send quotes with supplier preferences
        </CardWrapper>
        
      </MenuSection>
    </MainSectionWrapper>
  );
};

export default MainSection;
