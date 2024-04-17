import React from "react";
import TravelItem from "./TravelItem";

function TravelList() {
  const data = [
    {
      title: "Bahamas",
      desc: "Welcome to Bahamas! enjoy your trip",
      img_url:
        "https://images.partir.com/Ks7l5k5tKE4HATZ_nEJ7LH5oEI8=/1920x/panoramique/mobile/bahamas.jpg",
    },
    {
      title: "Costa Rica",
      desc: "Welcome to Costa Rica! enjoy your trip",
      img_url:
        "https://www.reisjunk.nl/wp-content/uploads/2023/05/drake-bay-hike.jpg",
    },
    {
      title: "Andorra",
      desc: "Welcome to Andorra! enjoy your trip",
      img_url:
        "https://tips.mnstatic.com/wp-content/uploads/2022/12/c57a40c9568b8631c071486be22e8bde-scaled.jpg?quality=60",
    },
  ];

  return (
    <section>
      <h2>Aquí va TravelList</h2>
      <TravelItem
        title={"Bahamas"}
        desc={"Welcome to Bahamas! enjoy your trip"}
        img_url={
          "https://images.partir.com/Ks7l5k5tKE4HATZ_nEJ7LH5oEI8=/1920x/panoramique/mobile/bahamas.jpg"
        }
      />
      <TravelItem
        title={"Costa Rica"}
        desc={"Welcome to Costa Rica! enjoy your trip"}
        img_url={
          "https://www.reisjunk.nl/wp-content/uploads/2023/05/drake-bay-hike.jpg"
        }
      />
      <TravelItem
        title={"Andorra"}
        desc={"Welcome to Andorra! enjoy your trip"}
        img_url={
          "https://tips.mnstatic.com/wp-content/uploads/2022/12/c57a40c9568b8631c071486be22e8bde-scaled.jpg?quality=60"
        }
      />

      {
        data.map((item, index) => <TravelItem
                                        key={index}
                                        title={item.title}
                                        desc={item.desc}
                                        img_url={item.img_url}
                                        />
        )
      }
    </section>
  );
}

export default TravelList;
