import React from "react";
import { Link } from "react-router-dom";
import portfolioMenu from "../../../utils/portfolio";

export default function FixedNextProject({ np }) {
  return (
    <Link to={`/portfolio/project/${np}`}>
      <div className="FixedNextProject">
        <div className="fixedNextProject_text_block">
          <span>Next project</span>
          {portfolioMenu
            .filter((v) => v.id === np)
            .map((v, i) => (
              <h1>{v.title}</h1>
            ))}
        </div>
      </div>
    </Link>
  );
}
