import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 224px;
  height: 127px;
  outline: 1px solid #e0e0e0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px 16px;
  > div:first-child > div:last-child {
    width: 50px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    margin-top: 9px;
    color: #8b96a5;
  }
`;
