import React from "react";
import "./styles.scss";
export default function SmmPage() {
  return (
    <div className="container">
      <div className="smmPage_dflex">
        <div className="smmPage_smmtext">
          <span>SMM </span>

          <h1>Выжимаем из SMM максимум.</h1>
          <p>
            SMM для нас — это качественный контент, регулярная аналитика и
            гарантированный результат.
          </p>
        </div>
        <div className="smmPage_smmImg">
          <div className="smmPage_singleImage">
            <img
              src="https://xspace.uz/wp-content/uploads/2020/06/phone1-250x497.png"
              alt=""
            />
          </div>
          <div className="smmPage_singleImage">
            <img
              src="https://xspace.uz/wp-content/uploads/2020/06/phone1-250x497.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
