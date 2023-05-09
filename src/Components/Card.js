import React, { createContext, useState } from "react";
import "./Card.css";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

export const cardsDataContext = createContext();

const Card = () => {
  const [cardsData] = useState([
    {
      day: "mon",
      amount: 17.45,
      id: 1,
    },
    {
      day: "tue",
      amount: 34.91,
      id: 2,
    },
    {
      day: "wed",
      amount: 52.36,
      id: 3,
    },
    {
      day: "thu",
      amount: 31.07,
      id: 4,
    },
    {
      day: "fri",
      amount: 23.39,
      id: 5,
    },
    {
      day: "sat",
      amount: 43.28,
      id: 6,
    },
    {
      day: "sun",
      amount: 25.48,
      id: 7,
    },
  ]);

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
