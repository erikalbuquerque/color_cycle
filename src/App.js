import React from 'react';

import { GlobalStyles } from "./assets/globalStyles";
import { Container } from "./assets/styles";

import InputArea from "./components/InputArea";
import Circle from "./components/Circle";
import SetAnimationButton from "./components/SetAnimationButton";
import Informations from "./components/Informations";

import AnimationProvider from "./context/Animation";

function App() {
  return (
    <AnimationProvider>
      <Container>
        <Circle />
        <Informations />

        <InputArea />

        <SetAnimationButton />

        <GlobalStyles />
      </Container>
    </AnimationProvider>
  );
}

export default App;
