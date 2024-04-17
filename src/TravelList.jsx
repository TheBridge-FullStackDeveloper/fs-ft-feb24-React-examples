import React, { useState } from "react";
import TravelItem from "./TravelItem";
import data from "./data"; // Datos iniciales

function TravelList() {
  //Estado inicial: list = data --> [{},{},{},{},{},{}]
  const [list, setList] = useState(data); // [{},{},{}] lista de items

  const paintItems = () =>
    list.map((item, index) => (
      <TravelItem
        key={index}
        title={item.title}
        desc={item.desc}
        img_url={item.img_url}
        delete={() => deleteItem(index)}
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

  return (
    <section>
      <h2>Aquí va TravelList</h2>
      <button onClick={clearItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>
      <button onClick={createItem}>Crear destino</button>
      {paintItems()}
    </section>
  );
}

export default TravelList;
