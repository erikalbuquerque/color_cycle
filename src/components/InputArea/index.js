import React, { useState } from "react";

import { Container, Hashtag, InputContent } from "./styles";

//import Input from "./../Input";

import { useHex } from "../../context/Hexadecimal";

function InputArea(){
  const { setRed, setGreen, setBlue } = useHex();

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const keywords = ["a", "b", "c", "d", "e", "f"];
  const keynumbers = ["0", "1", "2", "3", "4", "6", "7", "8", "9"];

  function isValide(value){
    const valueInArray = value.split("");
    valueInArray.map(value => {
      
      const isWord = keywords.includes(value);
      const isNumber = keynumbers.includes(value);

      if(!isWord && !isNumber) { 
        setMessage("Invalide input!");
        return setShowMessage(true);
      }
      return setShowMessage(false);
    })
    
  }

  function changeRed(value){
    isValide(value);
    setRed(value);
  }

  function changeGreen(value){
    isValide(value);
    setGreen(value);
  }

  function changeBlue(value){
    isValide(value);
    setBlue(value);
  }

  return(
    <Container>
      <Hashtag />

      <InputContent 
        name="hex01" 
        placeholder="00" 
        maxLength="2"
        onChange={(e) => changeRed(e.target.value)}
      />
      <InputContent 
        name="hex01" 
        placeholder="00" 
        maxLength="2"
        onChange={(e) => changeGreen(e.target.value)}
      />
      <InputContent 
        name="hex01" 
        placeholder="00" 
        maxLength="2"
        onChange={(e) => changeBlue(e.target.value)}
      />
      
      {showMessage ? <span>{message}</span> : ""}

    </Container>
  );
}
export default InputArea;