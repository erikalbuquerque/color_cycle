ginish daimport React from "react";

import { Container, Hashtag, InputContent } from "./styles";

//import Input from "./../Input";

import { useHex } from "../../context/Hexadecimal";

function InputArea(){
  const { setRed, setGreen, setBlue } = useHex();

  function changeRed(value){
    setRed(value)
  }

  function changeGreen(value){
    setGreen(value)
  }

  function changeBlue(value){
    setBlue(value)
  }

  return(
    <Container>
      <Hashtag />

      <InputContent 
        name="hex01" 
        placeholder="00" 
        onChange={(e) => changeRed(e.target.value)}
      />
      <InputContent 
        name="hex01" 
        placeholder="00" 
        onChange={(e) => changeGreen(e.target.value)}
      />
      <InputContent 
        name="hex01" 
        placeholder="00" 
        onChange={(e) => changeBlue(e.target.value)}
      />
      
      

    </Container>
  );
}
export default InputArea;