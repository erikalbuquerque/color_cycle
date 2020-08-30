import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 300px;
  margin: 16px 0px;
  
  span {
    margin: 5px;
    color: #c3c3c3;
    font-weight: 700;
    font-size: 18px;
    font-family: "Lato", "Helvetica", Helvetica, sans-serif;
  }
`;
export const Colors = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 0 5px;
`;
export const Color = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.background};
`;
export const Hsl = styled.span`
  span { 
    color: #3f3844;
  }
`;
export const Rgb = styled.span`
  span { 
    color: #3f3844;
  }
`;