import React from 'react';

import { GlobalStyles } from "./assets/globalStyles";
import { Container, InputArea, Hashtag } from "./assets/styles";

import Input from "./components/Input";
import Circle from "./components/Circle";

function App() {
  return (
    <Container>
      <Circle />

      <InputArea>
        <Hashtag />
        <Input name="hex01"/>
        <Input name="hex02"/>
        <Input name="hex03"/>
      </InputArea>

      <GlobalStyles />
    </Container>
  );
}

export default App;
