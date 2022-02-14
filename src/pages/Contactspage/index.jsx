import React from "react";
import AboutDesign from "../../components/Aboutcomponents/AboutDesign";
import Haveproject from "../../components/Aboutcomponents/HaveProject";
import ContactPageSaturn from "../../components/ContactPageComponents";
import "./styles.scss";
export default function Contactpage() {
  return (
    <div>
      <AboutDesign />
      <ContactPageSaturn />
      <Haveproject />
    </div>
  );
}
