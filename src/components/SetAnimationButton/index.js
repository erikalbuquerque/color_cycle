import React, { useState } from "react";

import { Button } from "./styles";

import Message from "../Message";

import { useAnimation } from "../../context/Animation";

function SetAnimationButton(){
  const { setAnimation, animation, setIsDisabled, isDisabled, colors } = useAnimation();
  const [startOrStop, setStartOrStop] = useState("Start");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function handleButton(){
    if(colors.length >= 2){
      !animation ? setAnimation(true) : setAnimation(false);
      !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
      startOrStop === "Start" ? setStartOrStop("Stop") : setStartOrStop("Start");
      setShowMessage(false);
    }else{
      setMessage("Add more colors to continue!");
      setShowMessage(true);
    }
  }
  return (
    <>
      <Button disable={isDisabled} onClick={() => handleButton()}>{startOrStop}</Button>
      {showMessage ? <Message type="alert" body={message}/> : ""}
    </>
  )
}
export default SetAnimationButton;