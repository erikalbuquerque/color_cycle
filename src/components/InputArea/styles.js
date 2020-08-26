import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Hashtag = styled.span`
 ::before {
    content: '#';
    color: #333;
  }
`;

export const InputContent = styled.input`
  max-width: 50px;
  padding: 4px;
  font-size: 16px;
  margin: 5px;
  border: none;
  border: 1px solid #333;
  border-radius: 4px;
  text-align: center;
  
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
`;

export const Button = styled.button`
  padding: 4px 16px;
  border: none;
  background: #ff2244;
  border-radius: 16px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 6px;
  left: 200px;
  :hover{
    opacity: 0.9;
  }
`;