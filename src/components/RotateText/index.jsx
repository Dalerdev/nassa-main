import React, { useEffect } from "react";
import CircleType from 'circletype';
import './styles.scss'

export default function RotateText() {
    useEffect(() => {
        const text = document.querySelector(".rotate_circular-text .rotate_text")
        const rotate = new CircleType(text).radius(65)
        
        window.addEventListener("scroll", function(){
          text.style.transform=`rotate(${window.scrollY * 0.15}deg)`
        })
    })
  return (
    <div>
      <div className="rotate_container">
        <div className="rotate_circular-text">
          <p className="rotate_text">NASA • NASA • NASA • NASA • NASA •</p>
          <div className="rotate_arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 512.568 512.568"
              style={{ enableBackground: "new 0 0 512.568 512.568" }}
              xmlSpace="preserve"
              width={512}
              height={512}
            >
              <path d="M184.284,235.284h140v40h-140V235.284z M275.284,436V315.284h-40V436l-53.858-53.858l-28.284,28.285l102.142,102.142  l105.142-105.142l-28.284-28.285L275.284,436z M235.284,76.568v118.716h40V76.568l56.858,56.858l28.284-28.284L255.284,0  L152.142,103.142l28.284,28.284L235.284,76.568z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
