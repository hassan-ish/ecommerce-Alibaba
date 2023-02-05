import React from "react";

import Button from "../Button";
import Title from "../Title";

import { InquirySectionWrapper } from "./style";

const InquirySection = () => {
  return (
    <InquirySectionWrapper>
      <div>
        <div>
          <Title>An easy way to send requests to all suppliers</Title>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
        <form>
          <div>Send quote to suppliers</div>
          <input type="text" placeholder="What item you need?" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type more details"
          ></textarea>
          <div>
            <input type="text" placeholder="Quantity" />
            <div>
              <div>Pcs</div>
              <div>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294983L6 4.87498L1.41 0.294983L0 1.70498L6 7.70498L12 1.70498L10.59 0.294983Z"
                    fill="#8B96A5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <Button>Send inquiry</Button>
        </form>
      </div>
    </InquirySectionWrapper>
  );
};

export default InquirySection;
