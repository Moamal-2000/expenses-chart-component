import React, { useState } from "react";
import "./CardHeader.css";

const CardHeader = () => {
  const [price] = useState(921.48);

  return (
    <div className="header">
      <div className="content">
        <span className="text">My balance</span>
        <h3 className="price">${price}</h3>
      </div>
      <div className="logo">
      </div>
    </div>
  );
};

export default CardHeader;
