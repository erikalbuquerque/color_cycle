import React from "react";

import { CircleContainer } from "./styles";

import { useAnimation } from "./../../context/Animation";

function Circle(){
  const { red, green, blue, animation, colors, time  } = useAnimation();
  const color = `#${red}${green}${blue}`;
  return(
    <CircleContainer color={color} pallete={colors} animation={animation} time={time}/>
  );
}
export default Circle;