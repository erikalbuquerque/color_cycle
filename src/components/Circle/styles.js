import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  background: ${props => props.color};
  border-radius: 50%;
  margin: 16px;
`;