import React from "react";
import { FormWrapper } from "./style";

const Search = () => {
  return (
    <FormWrapper>
      <input type="text" placeholder="Search" />
      <div>
        All category
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
      <button>Search</button>
    </FormWrapper>
  );
};

export default Search;