import styled from "styled-components";

function validateBackgroundColor(color){
  return color === "#" ? "transparent" : color ;
}

export const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content:center;
  align-items: center;
  background: ${(props) => validateBackgroundColor(props.color)};
  transition: background 1s ease;
  border-radius: 50%;
  margin: 16px;
  animation: ${props => (props.animation ? "start" : "")} ${props => props.time}s linear infinite;

  @keyframes start {
    0% {
      background: ${(props) => props.color};
    }
    ${(props) => {
      return props.pallete.map(
        (color, index) =>
          `${(index * 20).toString()}% { background: ${color}; }`
      );
    }}
  }
`