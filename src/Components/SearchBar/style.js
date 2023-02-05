import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 665px;
  height: 40px;
  border: 3px solid #0d6efd;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  input:first-of-type {
    padding: 11px;
    width: 63.2%;
    outline: none;
    border: none;
    border-right: 2px solid #0d6efd;
    cursor: text;
  }
  div {
    padding: 11px;
    width: 21.8%;
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;
  }
  button {
    color: white;
    background-color: #0d6efd;
    width: 15%;
    border: none;
    cursor: pointer;
  }
`;
