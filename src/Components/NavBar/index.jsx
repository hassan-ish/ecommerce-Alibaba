import React from "react";
import { Link } from "react-router-dom";

import flag from "../../Assets/LangFlags/germanLang.png";

import { NavWrapper } from "./style";
const Nav = () => {
  return (
    <NavWrapper>
      <div>
        <div>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
              fill="#1C1C1C"
            />
          </svg>
          All category
        </div>
        <div>Hot offers</div>
        <div>Gift boxes</div>
        <div>Projects</div>
        <Link to={'/store'}>Menu item</Link>
        <div>
          Help
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
              fill="#8B96A5"
            />
          </svg>
        </div>
      </div>
      <div>
        <div>
          English, USD
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
              fill="#8B96A5"
            />
          </svg>
        </div>
        <div>
          Ship
          <img src={flag} alt="german flag" />
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
              fill="#8B96A5"
            />
          </svg>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
