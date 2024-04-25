import React, { useState, useRef } from "react";
import TravelItem from "./TravelItem";
import data from "./data"; // Datos iniciales
import TravelCard from "../TravelCard";


function TravelList() {
  //Estado inicial: list = data --> [{},{},{},{},{},{}]
  const [list, setList] = useState(data); // [{},{},{}] lista de items
  const [values, setValues] = useState({
    title: "",
    desc: "",
    img_url: "",
  });

  const titleRef = useRef(""); // Referencia al input title

  const paintItems = () =>
    list.map((item, index) => (
      <TravelCard
        key={index}
        title={item.title}
        desc={item.desc}
        img_url={item.img_url}
        deleteItem={() => deleteItem(index)}
      />
    ));

  const clearItems = () => setList([]); // vacía la lista -> list = []

  const resetItems = () => setList(data); // resetea la lista -> list = data

  const createItem = () => {
    alert("Crear destino nuevo");
    const title = prompt("Introduce el título del destino");
    const desc = prompt("Introduce la descripción del destino");
    const img_url = prompt("Introduce la url de la imagen");

    const item = { title, desc, img_url }; // Nuevo objeto destino
    //list.push(item); // No se recomiendoa modificar directamente. Usar setList
    setList([...list, item]); // Añade el nuevo destino a la lista
  };

  const deleteItem = (pos) => {
    alert("Borrar destino");
    // [TravelItem1, TravelItem2, TravelItem3, TravelItem4, TravelItem5, TravelItem6]
    // pos = 2
    // [TravelItem1, TravelItem2, TravelItem4, TravelItem5, TravelItem6]
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems); // modifica el estado con lo restante
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value; // e.target.title.value; pero accede por referencia
    const desc = e.target.desc.value;
    const img_url = e.target.img_url.value;

    const item = { title, desc, img_url }; // Nuevo objeto destino
    setList([item, ...list]); // Añade el nuevo destino a la lista al principio
    console.log("*******");
    console.log(item);
    console.log(list);

    // Probando el uso de useRef
    console.log(titleRef.current.value);
    titleRef.current.value = "";
    console.log("*******");
    console.log(titleRef.current.value);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="travel-list">
      <h2>Aquí va TravelList</h2>
      <div className="button-set">
        <button onClick={clearItems}>Borrar todo</button>
        <button onClick={resetItems}>Recargar</button>
        <button onClick={createItem}>Crear destino</button>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Título</label>
          <input type="text" name="title" onChange={handleChange} ref={titleRef} />
        </div>

        <div>
          <label htmlFor="price">Descripción</label>
          <input type="text" name="desc" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="url">URL imagen</label>
          <input type="url" name="img_url" onChange={handleChange} />
        </div>

        {values.title && values.desc && values.img_url ?
          <button type="submit">Crear destino</button>
          : <></>}

      </form>

      {values.title || values.desc || values.img_url ?
        <div>
          <h4>Nuevo destino a crear</h4>
          <p>Título:{values.title}</p>
          <p>Descripción: {values.desc}</p>
          <p>URL:{values.img_url}</p>
        </div> : null}

      <section>
        {paintItems()}
      </section>

    </section>
  );
}

export default TravelList;
