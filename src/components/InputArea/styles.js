import styled from "styled-components";

export const Container = styled.div`
`;

export const Hashtag = styled.span`
 ::before {
    content: '#';
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
