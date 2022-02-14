import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import portfolioMenu from "../../../utils/portfolio";
import "./styles.scss";
const allCategories = [
  "all",
  ...new Set(portfolioMenu.map((v, i) => v.category)),
];
const MenuComponent = ({ items }) => {
  useEffect(() => {
    const section = document.querySelector("section");

    let currentPos = window.pageYOffset;
    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

      section.style.transform = `skewY(${speed}deg)`;

      currentPos = newPos;

      requestAnimationFrame(update);
    };

    update();
  });
  return (
    <>
      <section className="portfolio_filtered_portfolio-gallery">
        {items.map((menuItem) => {
          const { id, title, img, desc, category } = menuItem;
          return (
            <Link to={`/portfolio/project/${id}`}>
              <div
                className="portfolio_filtered_portfolio-item"
                data-filter="phone"
              >
                <div className="portfolio_filtered_item-inner">
                  <img
                    src={img}
                    alt={title}
                    className="portfolio_filtered_item-inner_img"
                  />
                  <h1>{title}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

const CategoryComponent = ({ categoires, filterItems }) => {
  return (
    <>
      <div className="portfolioFiltered_button_container">
        {categoires.map((category, index) => {
          return (
            <div
              className="portfolioFiltered_button"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
              <span>/</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default function PortfolioFiltered() {
  const [menuItem, setMenuItem] = useState(portfolioMenu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(portfolioMenu);

      return;
    }
    const newItem = portfolioMenu.filter((v) => v.category === category);
    setMenuItem(newItem);
  };

  return (
    <div className="portfolioFiltered container">
      <CategoryComponent categoires={categories} filterItems={filterItems} />
      <MenuComponent items={menuItem} />
    </div>
  );
}
