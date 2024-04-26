import { useContext, useRef } from 'react'
import { UserContext } from '../../../context/UserContext'
import { Button, TextField } from '@mui/material'


function Home() {
  const { updateUsername } = useContext(UserContext); // Consume el contexto
  const inputName = useRef('');

  const handleClick = () => {
    const userName = inputName.current.value;
    alert(`Valor del input: ${userName}`);
    updateUsername(userName); // invoca a función del contexto
    inputName.current.value = '';
  };

  return (
    <section className="home">
      <h1>Home</h1>
      <h2>Update Username</h2>
        <div className="homeForm">
          {/* <input type="text" ref={inputName} /> */}
          <TextField type="text" inputRef={inputName}/>
          <Button variant="contained" size="large" onClick={handleClick}>Update</Button>
        </div>
    </section>
  );
}

export default Home;