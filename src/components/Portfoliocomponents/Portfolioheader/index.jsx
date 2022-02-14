import React from "react";
import "./styles.scss";
export default function Portfolioheader({ children }) {
  return (
    <div className="portfolioheader container">
      <h1 className="gradient__text">{children}</h1>
    </div>
  );
}
