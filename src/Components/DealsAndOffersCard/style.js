import styled from "styled-components";

export const DealsAndOffersCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  height: 100%;
  padding: 20px;
  width: 179px;
  border: 1px solid #e0e0e0;
  > div:nth-child(2) {
    font-weight: 400;
  }
  > div:last-child {
    background-color: #ffe3e3;
    color: #eb001b;
    font-weight: 500;
    font-size: 14px;
    padding: 5px 13px;
    border-radius: 29px;
  }
`;
