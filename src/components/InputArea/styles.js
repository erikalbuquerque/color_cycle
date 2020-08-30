import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Hashtag = styled.span`
 ::before {
    content: '#';
    color: ${props => props.disabled ? "#ccc" : "#333" };
  }
`;

export const InputContent = styled.input`
  max-width: 50px;
  padding: 4px;
  font-size: 16px;
  margin: 5px;
  border: none;
  border: 1px solid ${props => props.disabled ? "#eaeaea" : "#a0a0a0" };
  background: ${props => props.disabled ? "#eaeaea" : "#f5f5f5" };
  border-radius: 4px;
  text-align: center;
  ::placeholder{
    color: #c3c3c3;
  }

`;
export const Message = styled.span`
  background: red;
  padding: 4px;
  border-radius: 8px;
  color: #f5f5f5;
  width: 100%;
  justify-self: flex-end;
  text-align: center;
  margin-top: 8px;
  
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const AddNewColor = styled.button`
  border: none;
  color: ${props => props.disabled ? "#c1c1c1" : "#3f3844" };
  font-size: 16px;
  cursor: pointer;
  background: transparent;
  position: absolute;
  top: 10px;
  left: 210px;
 
  :hover{
    color: ${props => props.disabled ? "#3f3844" : "#04bf58" };
  }
`;
export const RemoveColor = styled.button`
  border: none;
  color: ${props => props.disabled ? "#c1c1c1" : "#3f3844" };
  font-size: 16px;
  cursor: pointer;
  background: transparent;
  position: absolute;
  top: 10px;
  left: -35px;
  margin-right: 5px;
  :hover{
    color: ${props => props.disabled ? "#3f3844" : "#ff1200" };
  }
`;