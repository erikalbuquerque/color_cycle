import React from "react";

import { InputContent } from "./styles";

function Input({ name, hex, ...rest}){
  return(
    <InputContent type="text" name={name} placeholder="00" value={hex} {...rest}/>
  );
}
export default Input;