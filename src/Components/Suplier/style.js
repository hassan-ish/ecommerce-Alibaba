import styled from "styled-components";

export const SuplierWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  & > div:last-child div:first-child {
    font-weight: 400;
  }
  & > div:last-child div:last-child {
    font-weight: 400;
    font-size: 13px;
    color: #8b96a5;
  }
`;
