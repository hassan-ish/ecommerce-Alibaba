import React from "react";

import Container from "../../Components/Container";
import DealsAndOffers from "../../Components/DealsAndOffers";
import ExtraServices from "../../Components/ExtraServices";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import InquirySection from "../../Components/InquirySection";
import MainSection from "../../Components/MainSection";
import Nav from "../../Components/NavBar";
import NewsLetter from "../../Components/NewsLetter";
import RecommendedItems from "../../Components/RecommendedItems";
import Search from "../../Components/SearchBar";
import SuggestedItems from "../../Components/SuggestedItems";
import Suppliers from "../../Components/Suppliers";

import homePic from '../../Assets/home.png'
import electricPic from '../../Assets/electricalpng.png'
import { homeData } from "./data";

import { MainHomeWrapper } from "./style";
const Home = () => {
  return (
    <div>
      <Header>
        <Search />
      </Header>
      <Nav />
      <MainHomeWrapper>
        <Container>
          <MainSection />
          <DealsAndOffers />
          <SuggestedItems
            pic={homePic}
            name='Home and outdoor'
            data={homeData}
            />
          <SuggestedItems
            pic={electricPic}
            name='Consumer electronics and gadgets'
            data={homeData}
          />
          <InquirySection />
          <RecommendedItems />
          <ExtraServices />
          <Suppliers />
        </Container>
      </MainHomeWrapper>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
