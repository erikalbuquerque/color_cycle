import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
`;

export const InputArea = styled.div``;

export const Hashtag = styled.span`
 ::before {
    content: '#';
  }
`;