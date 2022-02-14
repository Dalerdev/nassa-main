import React from "react";
import PortfolioGallery from "../../components/Portfoliocomponents/PortfolioGallery";
import Portfolioheader from "../../components/Portfoliocomponents/Portfolioheader";
import "./styles.scss";
export default function Blogspage() {
  return (
    <div className="container">
      <Portfolioheader>Our team</Portfolioheader>
      <PortfolioGallery />
    </div>
  );
}
