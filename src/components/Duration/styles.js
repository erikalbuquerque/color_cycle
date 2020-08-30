import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  i span { 
    color: #3f3844;
    margin: 0px 5px;
  }
`;

export const Input = styled.input`
  max-width: 50px;
  padding: 2px 4px;
  font-size: 16px;
  margin: 0 5px;
  border: none;
  border: 1px solid ${props => props.disabled ? "#eaeaea" : "#a0a0a0" };
  background: ${props => props.disabled ? "#eaeaea" : "#f5f5f5" };
  border-radius: 4px;
  text-align: center;
  ::placeholder{
    color: #c3c3c3;
  }

`;
