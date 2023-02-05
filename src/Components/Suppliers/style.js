import styled from "styled-components";

export const SuppliersWrapper = styled.div`
  display: grid;
  row-gap: 24px;
  & > div:last-child {
    display: grid;
    grid-template-columns: repeat(5, auto);
    row-gap: 18px;
  }
`;
