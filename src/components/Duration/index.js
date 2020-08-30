import React from "react";

import { GiBackwardTime } from 'react-icons/gi';

import { Input, Container } from "./styles";

import { useAnimation } from "../../context/Animation";

function Duration(){
  const { isDisabled, setTime, time } = useAnimation();
  function changeDuration(value){
    !value === "" ? setTime(value) : setTime(1);
  }
  return(
    <Container>
      <GiBackwardTime size={25} color="#3f3844"/>
      <Input
          type="number"
          placeholder={`${time}s`} 
          maxLength="4"
          disabled={isDisabled} 
          onChange={(e)=> changeDuration(e.target.value)}
        />
    </Container>
  )
}
export default Duration;