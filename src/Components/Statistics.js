import React, { useContext, useEffect, useState } from "react";
import { cardsDataContext } from "./Card";
import "./Statistics.css";

const Statistics = () => {
  const cardsData = useContext(cardsDataContext);
  const [highestAmount, setHighestAmount] = useState(0);
  const amounts = cardsData.map((card) => card.amount);

  useEffect(() => {
    for (let i = 0; i < amounts.length; i++) {
      amounts[i] > highestAmount
        ? setHighestAmount(amounts[i])
        : (amounts[i] = amounts[i + 1]);
    }
  }, [highestAmount, amounts]);
  return (
    <div className="statistics">
      {cardsData.map((card) => (
        <div className="state" data-amount={"$" + card.amount} key={card.id}>
          <div
            className={highestAmount === card.amount ? "draw highest" : "draw"}
            style={{ height: `${card.amount * 4}px` }}
          ></div>
          <span>{card.day}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
