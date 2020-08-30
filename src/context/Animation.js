import React, { createContext, useState, useContext } from "react";

const AnimationContext = createContext();

export default function AnimationProvider({ children }) {
  const [red, setRed] = useState("00");
  const [green, setGreen] = useState("00");
  const [blue, setBlue] = useState("00");

  const [animation, setAnimation] = useState(false);

  const [colors, setColors] = useState([]);

  const [isDisabled, setIsDisabled] = useState(false);
  const [time, setTime] = useState(1);

  return (
    <AnimationContext.Provider
      value={{
        red, 
        setRed,
        green, 
        setGreen,
        blue, 
        setBlue,
        animation,
        setAnimation,
        colors, 
        setColors,
        isDisabled, 
        setIsDisabled,
        time, 
        setTime
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  const { red, setRed, green, setGreen, blue, setBlue, animation, setAnimation, colors, setColors, isDisabled, setIsDisabled, time, setTime } = context;
  return { red, setRed, green, setGreen, blue, setBlue, animation, setAnimation, colors, setColors, isDisabled, setIsDisabled, time, setTime };
}