import styled from "styled-components";

import trindingPic from "../../Assets/latestTrinding.png";

export const MainSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 22% 59% 17%;
  gap: 15px;
  background-color: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 20px 20px 14px;
  margin-bottom: 30px;

  & > div:first-child {
    div {
      padding: 10px;
      border-radius: 6px;
      :first-child {
        background: #e5f1ff;
      }
    }
  }
`;
export const TrindingWrapper = styled.div`
  background-image: url(${trindingPic});
  background-size: cover;
  > div {
    padding: 56px 0 0 44px;
    > div:first-child {
      font-weight: 400;
      font-size: 28px;
    }
    > div:last-of-type {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 17px;
    }
    button {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const UserFormWrapper = styled.div`
  padding: 14px 10px;
  width: 200px;
  height: 150px;
  background-color: #e3f0ff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  > div {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }
  button {
    width: 100%;
    height: 30px;
    :last-child {
      color: #0d6efd;
    }
  }
`;
export const CardWrapper = styled.div`
  width: 200px;
  height: 95px;
  padding: 16px 40px 0 16px;
  font-weight: 400;
  color: #ffffff;
  background-color: ${(props) => props.bgColor};
  border-radius: 6px;
`;
