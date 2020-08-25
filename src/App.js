import React from 'react';

import { GlobalStyles } from "./globalStyles";

import Input from "./components/Input";

function App() {
  return (
    <>
      <GlobalStyles />
      <Input name="Hexadecimal"/>
      <Input name="Hexadecimal"/>
      <Input name="Hexadecimal"/>
    </>
  );
}

export default App;
