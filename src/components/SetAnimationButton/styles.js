import styled from "styled-components";

export const Button = styled.button`
  width: 290px;
  max-width: 300px;
  padding: 16px;
  border: none;
  background: ${props => props.disable ? "#ff1200" : "#04d361" };
  border-radius: 16px;
  color: #f5f5f5;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 32px;

  :hover{
    background: ${props => props.disable ? "#f00000" : "#04bf58" };
  }
`;
