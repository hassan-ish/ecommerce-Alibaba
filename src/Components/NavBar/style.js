import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 130px;
  border: 1px solid #e0e0e0;
  border-left: none;
  border-right: none;
  font-weight: 500;
  a {
    text-decoration: none;
    color: black;
  }
  div:has(svg) {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  & > div:first-of-type {
    width: 52%;
    display: flex;
    justify-content: space-between;
  }
  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
    gap: 38px;
  }
  &>div div {
    cursor: pointer;
  }
`;
