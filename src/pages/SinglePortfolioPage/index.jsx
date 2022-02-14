import React from "react";
import { useParams } from "react-router-dom";
import CartForSinlgePortfolioPage from "../../components/Portfoliocomponents/CardForSinglePortfolioPage";
export default function SinglePortfolioPage({ portfolioMenu }) {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      {portfolioMenu
        .filter((v) => v.id == id)
        .map((v, i) => {
          let np = v.id + 1;

          if (np > 9)  np = 1

          console.log(np);
          return (
            <>
              <CartForSinlgePortfolioPage np={np} v={v} />
            </>
          );
        })}
    </div>
  );
}
