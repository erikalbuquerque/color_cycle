import React from 'react';

import { GlobalStyles } from "./assets/globalStyles";
import { Container } from "./assets/styles";

import Input from "./components/Input";
import Circle from "./components/Circle";

function App() {
  return (
    <Container>
      <>
        <Input name="Hexadecimal"/>
        <Input name="Hexadecimal"/>
        <Input name="Hexadecimal"/>
      </>

      <Circle />
      <GlobalStyles />
    </Container>
  );
}

export default App;
