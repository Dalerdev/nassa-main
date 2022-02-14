import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { BsBoxArrowUpRight } from "react-icons/bs";
export default function PortfolioGallery() {
  useEffect(() => {
    const imgContent = document.querySelectorAll(".img-content-hover");

    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {
        let x = e.pageX;
        let y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    }

    document.addEventListener("mousemove", showImgContent);
  });
  return (
    <div className="ourteam container">
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
          rel="stylesheet"
        />
        <div className="gallery">
          <div className="gallery__column">
            
          </div>
        </div>
      </div>
    </div>
  );
}
