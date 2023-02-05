import React from "react";
import styled from "styled-components";

const SupTitle = (props) => {
  const SupTitle = styled.div`
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
  `;
  return <SupTitle>{props.children}</SupTitle>;
};

export default SupTitle;
