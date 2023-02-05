import styled from "styled-components";

export const NewsWrapper = styled.div`
  background-color: #eff2f4;
  display: grid;
  place-items: center;
  padding: 39px;
  & div:first-of-type {
    font-weight: 600;
    font-size: 20px;
  }
  & div:last-of-type {
    font-weight: 400;
    color: #606060;
    margin-bottom: 20px;
  }
  & form {
    display: flex;
    align-items: flex-start;
  }
  & form > label {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 6px;
    padding-left: 10px;
    margin-right: 8px;
  }
  & form input {
    padding: 10px;
    border-radius: 6px;
    border: none;
    outline: none;
  }
`;
