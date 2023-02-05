import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 10px;
  color: white;
  border: 1px solid #0d6efd;
  background: ${(props) =>
    props.bgColor
      ? props.bgColor + ";color:black;border:none;"
      : "linear-gradient(180deg, #127fff 0%, #0067ff 100%)"};
  border-radius: 6px;
  cursor: pointer;
`;
