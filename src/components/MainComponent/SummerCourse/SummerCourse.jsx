import React, { useEffect, useState } from 'react';

const SummerCourse = () => {

  //Iniciamos el estado formulario con un valor por defecto
   const [formulario, setFormulario] = useState({
          nombre: 'Pepe',
          email: 'pepe@pepe.es',
          curso: 'React.js',
      })

  const {nombre,email,curso} = formulario;

   const handleChange = ({ target }) => {
      
      const { name, value } = target;

      setFormulario({
          ...formulario,
          [name]: value //[] establece propiedad computada del objeto, si no puesieramos [] crearría una nueva propiedad del objeto
      })
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        curso: e.target.curso.value
    }
    setFormulario(data); // Modificar el estado de Formulario
  }

  //Usamos el useEffect, es recomendable disparar por separado los useEffect que tengan responsabilidad Única

   //este sólo se ejecutará la primera vez que se carge el componente
  useEffect(() => {
              console.log('1. se ejecuta el useEffect')
          }, [])

  //este se ejecutará cada vez que cambie el estado del formulario
  useEffect(() => {
              console.log('ha cambiado el estado del formulario')
              console.log(formulario);
          }, [formulario])


   //este se ejecutará cada vez que cambie el estado del nombre
  useEffect(() => {
      console.log('Ha cambiado el nombre')
  }, [nombre])
  
  return(
      <form className="mt-4 summer-course form" onSubmit={handleSubmit} >
        <h3>Summer Course SignUp</h3>
          <input type="text" name='nombre' onChange={handleChange}/>
          <input type="text" name='email' />
          <input type="text" name='curso'/>

          <textarea name="comentario" placeholder='Comentario' />

          <button type='submit' className="water-button">Enviar</button>
      </form>

  )
}

export default SummerCourse;  