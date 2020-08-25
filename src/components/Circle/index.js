import React from "react";

import { CircleContainer } from "./styles";

import { useHex } from "./../../context/Hexadecimal";

function Circle(){
  const { red, green, blue  } = useHex();
  const color = `#${red}${green}${blue}`;
  return(
    <CircleContainer color={color}/>
  );
}
export default Circle;