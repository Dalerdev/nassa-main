import React from "react";
import AboutBlogs from "../../components/Aboutcomponents/AboutBlogs";
import AboutBuyAndSell from "../../components/Aboutcomponents/AboutBuyAndSell";
import AboutDesign from "../../components/Aboutcomponents/AboutDesign";
import AboutusImage from "../../components/Aboutcomponents/AboutusImage";
import "./styles.scss";

export default function Aboutpage() {
  return (
    <>
      <div className="testPage">
        <header>
          <div class="testPage_container testPage_container_solid">
            <div class="testPage_title_wrapper">
              <h1>The Great Outdoors</h1>
            </div>
          </div>

          <div
            class="testPage_container testPage_container_image"
            aria-hidden="true"
          >
            <div class="testPage_title_wrapper">
              <h1>The Great Outdoors</h1>
            </div>
          </div>
        </header>

        <section>
          <div className="about_us_first_container">
            {/* <AboutusImage /> */}
            <AboutDesign />
            <AboutBuyAndSell />
            <AboutBlogs />
          </div>
        </section>
      </div>
    </>
  );
}
