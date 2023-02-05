import styled from "styled-components";
export const DealsAndOffersWrapper = styled.div`
  outline: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  > div:first-child {
    padding: 20px 30px;
    width: 362px;
    > div:nth-child(2) {
      font-weight: 400;
      line-height: 19px;
      color: #8b96a5;
    }
  }
`;
export const CountDownWrapper = styled.div`
  display: flex;
  column-gap: 6px;
  margin-top: 18px;
  > div {
    width: 45px;
    height: 50px;
    background-color: #606060;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    > div:first-child {
      font-weight: 700;
    }
    > div:last-child {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;
