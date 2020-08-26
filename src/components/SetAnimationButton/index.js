import React, { useState } from "react";

import { Button } from "./styles";

function SetAnimationButton(){
  const [startOrStop, setStartOrStop] = useState("Start")
  function handleButton(){
    startOrStop === "Start" ? setStartOrStop("Stop") : setStartOrStop("Start");
  }
  return (
    <><Button onClick={() => handleButton()}>{startOrStop}</Button></>
  )
}
export default SetAnimationButton;