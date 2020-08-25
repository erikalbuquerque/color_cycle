import React from 'react';

import { GlobalStyles } from "./assets/globalStyles";
import { Container, InputArea } from "./assets/styles";

import Input from "./components/Input";
import Circle from "./components/Circle";

function App() {
  return (
    <Container>
      <Circle />

      <InputArea>
        <Input name="Hexadecimal"/>
        <Input name="Hexadecimal"/>
        <Input name="Hexadecimal"/>
      </InputArea>

      <GlobalStyles />
    </Container>
  );
}

export default App;
