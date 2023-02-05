import styled from "styled-components";
import background from "../../Assets/inquiry.png";

export const InquirySectionWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
  overflow: hidden;
  > div {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(
      94.99deg,
      #2c7cf1 7.19%,
      rgba(0, 209, 255, 0.5) 89.49%
    );
    > div {
      * {
        color: #fff;
      }
      padding: 10px;
      width: 400px;
      > div:first-child {
        font-weight: 600;
        font-size: 32px;
      }
      > div:last-child {
        font-weight: 400;
      }
    }
    form {
      width: 491px;
      height: 346px;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      padding: 25px 31px 25px 20px;
      background: #ffffff;
      box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
      border-radius: 6px;
      > div:first-child {
        font-weight: 600;
        font-size: 20px;
        letter-spacing: -0.2px;
      }
      input,
      textarea {
        padding: 11px;
        border: 1px solid #e3e8ee;
        border-radius: 6px;
        resize: none;
      }
      textarea + div {
        display: flex;
        column-gap: 8px;
        > div {
          width: 111px;
          padding: 11px;
          display: flex;
          justify-content: space-between;
          border: 1px solid #e3e8ee;
          border-radius: 6px;
        }
      }
      button {
        width: 129px;
      }
    }
  }
`;
