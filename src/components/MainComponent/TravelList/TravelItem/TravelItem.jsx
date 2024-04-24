// rfce
import React from "react";

function TravelItem({title, desc, img_url, deleteItem}) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{desc}</p>

      <img src={img_url} width={200} alt={title} />
      <br/>
      <button onClick={()=>deleteItem()}>Borrar</button>
    </article>
  );
}

export default TravelItem;
