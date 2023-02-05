import styled from "styled-components";

export const SuggestedItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 362px 1fr;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 257px;
  > div:first-child {
    background-image: url(${(props) => props.mainImg});
    background-size: cover;
    padding: 20px;
    > div {
      width: 150px;
      margin-bottom: 20px;
    }
  }
  > div:last-child {
    display: flex;
    flex-wrap: wrap;
  }
`;
