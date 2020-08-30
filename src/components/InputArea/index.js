import React, { useState } from "react";

import { Container, Hashtag, InputContent, Box, AddNewColor, RemoveColor } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';

import Message from "../Message";

//import Input from "./../Input";

import { useAnimation } from "../../context/Animation";

function InputArea(){
  const { red, green, blue, setRed, setGreen, setBlue, setColors, colors, isDisabled } = useAnimation();
  const [newInputColor, setNewInputColor] = useState([colors.length]);

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const keywords = ["a", "b", "c", "d", "e", "f"];
  const keynumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const color = `#${red}${green}${blue}`;

  function toUpper(value){
    return value.toUpperCase()
  }
  function resetColor(){
    setRed("")
    setGreen("")
    setBlue("")
  }
  function handleButtonAdd(){
    setColors([...colors, color]);
    resetColor();
    setNewInputColor([...newInputColor, newInputColor.push()])
  }
  function handleButtonRemove(id){
    const filteredArrayColors = colors.filter(color => color !== colors[id])
    //const filteredArrayInputs = newInputColor.filter(input => input !== newInputColor[id])
    const filteredArrayInputs = [...newInputColor]
    filteredArrayInputs.splice(id, 1)

    setColors([filteredArrayColors])
    setNewInputColor(filteredArrayInputs)
  }
  function isValide(value){
    const valueInArray = value.split("");

    const arrayUpperCase = valueInArray.map(word => toUpper(word));

    valueInArray.map(value => {

      const isWordUpperCase = arrayUpperCase.includes(value);
      
      const isWord = keywords.includes(value);

      const isNumber = keynumbers.includes(value);

      if((!isNumber && !isWord) && (!isWordUpperCase || isWordUpperCase)) { 
        setMessage("Invalide input");
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
      <AddNewColor disabled={isDisabled} onClick={() => handleButtonAdd()}>
        <FiPlus />
      </AddNewColor>
      {newInputColor.map((index) => (
        <Box key={index}>
          <RemoveColor disabled={isDisabled} onClick={() => handleButtonRemove(index)}>
            <FiMinus />
          </RemoveColor>
          <Hashtag />
          <InputContent 
            placeholder="00" 
            maxLength="2"
            disabled={isDisabled}
            onChange={(e) => changeRed(e.target.value)}
          />
          <InputContent  
            placeholder="00" 
            maxLength="2"
            disabled={isDisabled}
            onChange={(e) => changeGreen(e.target.value)}
          />
          <InputContent  
            placeholder="00" 
            maxLength="2"
            disabled={isDisabled}
            onChange={(e) => changeBlue(e.target.value)}
          />
        </Box>
      ))}
      
      {showMessage ? <Message type="alert" body={message}/> : ""}

    </Container>
  );
}
export default InputArea;