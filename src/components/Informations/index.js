import React from "react";

import { useAnimation } from "../../context/Animation";

import { Container, Info, Hsl, Rgb, Colors, Color } from "./styles";

import Duration from "../Duration";

function Informations(){
  const { red, green, blue, colors  } = useAnimation();
  const color = `#${red}${green}${blue}`;
  function getRGB(hex){
    if(hex.length === 7){
      var r = parseInt(hex.substr(1,2),16);
      var g = parseInt(hex.substr(3,2),16);
      var b = parseInt(hex.substr(5,2),16);    
      return `${r}, ${g}, ${b}` ;
    }
  }
  function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length === 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length === 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta === 0)
      h = 0;
    else if (cmax === r)
      h = ((g - b) / delta) % 6;
    else if (cmax === g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return  h + "%, " + s + "%, " + l + "%";
  }
  return(
    <Container>
      <Info>
        <Duration />
        <Hsl>HSL <span>{hexToHSL(color)}</span></Hsl>
        <Rgb>RGB <span>{getRGB(color)}</span></Rgb> 
      </Info>
      <Colors>
        {colors.map((color, index) => (
          <Color key={index} background={color} />
        ))}
      </Colors>
    </Container>
  )
}
export default Informations;