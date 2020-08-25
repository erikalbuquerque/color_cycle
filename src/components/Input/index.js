import React from "react";

import { InputContent } from "./styles";

function Input({ name, ...rest}){
  return(
    <InputContent type="text" placeholder="00" {...rest}/>
  );
}
export default Input;