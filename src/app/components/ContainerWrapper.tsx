import React from "react";
import styled from "styled-components";

const ContainerWrapper: React.FC<React.PropsWithChildren> = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
`;

export default ContainerWrapper;
