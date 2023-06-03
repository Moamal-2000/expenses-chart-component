import React, { useContext } from "react";
import { cardsDataContext } from "./Card";
import "./CardBody.css";
import Statistics from "./Statistics";

const CardBody = () => {
  const cardsData = useContext(cardsDataContext);
  let totalPrice = 0;
  let numberDays = 0


  cardsData.map((item) => {
    numberDays++
    return totalPrice += item.amount
  });


  return (
    <div className="body-card">
      <h3 className="spending">Spending - Last {numberDays} days</h3>
      <Statistics />

      <span className="line"></span>

      <div className="footer">
        <div className="total-container">
          <p className="total-msg">Total this week</p>
          <h3 className="total-price">${totalPrice.toFixed(2)}</h3>
        </div>

        <div className="last-month">
          <span className="percentage">+2.4%</span>
          <p className="text">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
