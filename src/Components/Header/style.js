import styled from "styled-components";

export const HederWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 0;

  & .nav {
    display: flex;
    gap: 20px;
    font-size: 12px;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
  }
`;

