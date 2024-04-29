import React from "react";
import CounterContainer from "./CounterContainer";
import MessageContainer from "./MessageContainer";
import UserContainer from "./UserContainer";

const Donations = () => {
  return <section>
      <h1>Donations</h1> 
      <CounterContainer />
      <MessageContainer />
      <UserContainer />
    </section>;
};

export default Donations;
