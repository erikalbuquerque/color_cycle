import styled from "styled-components";

function setMessageTypeColor(type){
  return type === "alert" ? "red" : "blue"
}

export const Text = styled.div`
  background: ${props => setMessageTypeColor(props.type)};
  padding: 4px;
  border-radius: 8px;
  max-width: 300px;
  color: #f5f5f5;
  width: 100%;
  justify-self: flex-end;
  text-align: center;
  margin-top: 8px;
`;