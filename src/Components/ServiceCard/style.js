import styled from "styled-components";

export  const ServiceCardWrapper = styled.div`
background-color: white;
border: 1px solid #e0e0e0;
border-radius: 6px;
width:300px;
overflow: hidden;
cursor: pointer;
& > div:first-child {
  background: #1c1c1c;
  height: 120px;
  img {
    height: 100%;
    width: 100%;
  }
}
& > div:last-child {
  padding: 16px 20px;
  position: relative;
  > div:first-child {
    width: 60%;
  }
}
`;
export const IconWrapper = styled.div`
width: 58px;
height: 58px;
display: grid;
place-content: center;
border-radius: 50%;
border: 3px solid white;
background-color: #d1e7ff;

position: absolute;
top: 0;
right: 20px;
transform: translateY(-50%);
`;