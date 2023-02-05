import styled from "styled-components";

export const ItemWrapper = styled.div`
  background-color: white;
  width: 227px;
  height: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  > div:first-child {
    height: 200px;
    display: grid;
    place-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > div:last-child {
    padding: 16px 14px;
    div:first-child {
      font-weight: 500;
    }
    div:last-child {
      margin-top: 5px;
      font-weight: 400;
      color: #8b96a5;
    }
  }
`;
