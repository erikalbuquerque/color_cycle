import React from "react";

import { Text } from "./styles";

function Message({type, body}){
  return (
    <Text type={type}>{body}</Text>
  )
}

export default Message;