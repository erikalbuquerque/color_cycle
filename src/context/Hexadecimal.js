import React, { createContext, useState, useContext } from "react";

const HexContext = createContext();

export default function HexProvider({ children }) {
  const [red, setRed] = useState("00");
  const [green, setGreen] = useState("00");
  const [blue, setBlue] = useState("00");

  return (
    <HexContext.Provider
      value={{
        red, 
        setRed,
        green, 
        setGreen,
        blue, 
        setBlue
      }}
    >
      {children}
    </HexContext.Provider>
  );
}

export function useHex() {
  const context = useContext(HexContext);
  const { red, setRed, green, setGreen, blue, setBlue } = context;
  return { red, setRed, green, setGreen, blue, setBlue };
}