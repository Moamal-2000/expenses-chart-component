import React, { createContext, useState } from "react";
import "./Card.css";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import apiData from "../API/data.json"

export const cardsDataContext = createContext();

const Card = () => {
  const [cardsData] = useState(apiData);

  return (
    <cardsDataContext.Provider value={cardsData}>
      <div className="container card-container">
        <div className="card">
          <CardHeader />
          <CardBody />
        </div>
      </div>
    </cardsDataContext.Provider>
  );
};

export default Card;
