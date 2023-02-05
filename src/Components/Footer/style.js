import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  padding: 40px 0;
  > div:first-of-type > div {
    margin-bottom: 17px;
  }
  .socialMedia {
    display: flex;
    gap: 12px;
  }
  > div:not(div:first-of-type) div:first-child {
    font-weight: 500;
    margin-bottom: 15px;
  }
  > div:not(div:first-of-type) div:not(div:first-child) {
    font-weight: 400;
    color: #8b96a5;
    margin-bottom: 3px;
  }
`;
export const CopyRight = styled.div`
  background: #eff2f4;
  display: flex;
  justify-content: space-between;
  padding: 23px 130px;
  > div:last-of-type {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
