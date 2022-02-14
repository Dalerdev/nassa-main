import React from "react";
import AboutDesign from "../../components/Aboutcomponents/AboutDesign";
import Global from "../../components/Global";
import { Brand, CTA, Navbar } from "../../components/Homecomponents";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "../../components/Homecomponents/containers";
import "./styles.scss";

const Homepage = () => (
  <div className="App">
    <div className="gradient__bg">
      <AboutDesign />

      <Header />
    </div>
    <AboutDesign />
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <AboutDesign />
    <CTA />
    <Blog />
  </div>
);

export default Homepage;
