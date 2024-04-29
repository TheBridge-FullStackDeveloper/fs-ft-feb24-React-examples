import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { writeMessage, deleteMessage } from "../../../../redux";

function MessageContainer () {
  const message = useSelector(state => state.messageR.message);
  const dispatch = useDispatch();

  const [text, setText] = useState("") // guarda lo que pongas en el input de texto

  return <div>
    <h2>Envío de mensajes</h2>
    <h3>Mensaje recibido:{message}</h3>
    <input type="text" onChange={e => setText(e.target.value)} />
    <button onClick={() => dispatch(writeMessage(text))}>Despachar Gambas</button>
    <button onClick={() => dispatch(deleteMessage())}>Borrar mensaje</button>
  </div>
}

export default MessageContainer