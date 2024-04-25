import React, { useRef, useState } from 'react';

const FormContact = ({ setMessage }) => {
  const inputValue = useRef(); // Creamos una referencia para el input

  const handleClick = () => {
    setMessage(inputValue.current.value); // Pasamos el mensaje al componente hermano a través de la función setMessage
  };

  return (
    <div className="form-contact">
      <input type="text" ref={inputValue}/>
      <button onClick={handleClick} className="water-button">Enviar mensaje</button>
    </div>
  );
};

export default FormContact;