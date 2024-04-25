import {useState} from "react";
import FormContact from "./FormContact";
import CardContact from "./CardContact";


const Contact = () => {
  // Creamos un estado para guardar el mensaje que se envía desde el formulario
  const [message, setMessage] = useState(''); 

  return <section className="contact">
    <h2>Contact</h2>
    <FormContact setMessage={setMessage}/>
    <CardContact message={message}/>
  </section>;
};

export default Contact;
