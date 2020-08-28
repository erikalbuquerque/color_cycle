import React from 'react';

import { GlobalStyles } from "./assets/globalStyles";
import { Container } from "./assets/styles";

import InputArea from "./components/InputArea";
import Circle from "./components/Circle";
import SetAnimationButton from "./components/SetAnimationButton";

import HexProvider from "./context/Hexadecimal";

function App() {
  return (
    <HexProvider>
      <Container>
        <Circle />

        <InputArea />

        <SetAnimationButton />

        <GlobalStyles />
      </Container>
    </HexProvider>
  );
}

export default App;
