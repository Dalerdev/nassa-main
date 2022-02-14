import { motion } from "framer-motion";
import React from "react";
import { Feature } from "../..";
import { footerButtonAnimation } from "../../../../utils/animations";
import { useScroll } from "../../../../utils/useScroll";
// import Feature from '../../components/Homecomponents/feature/Feature';
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    service: "Design",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    service: "Web",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    service: "Marketing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    service: "Digital",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div
        ref={element}
        className="gpt3__features section__padding"
        id="features"
      >
        <motion.div
          variants={footerButtonAnimation}
          animate={controls}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
          className="gpt3__features-heading"
        >
          <span>SERVICES</span>
          <div className="features_line"></div>
          <h1 className="gradient__text">
            The Future is Now and You Just Need to Realize It. Step into Future
            Today. & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </motion.div>
        <div className="gpt3__features-container">
          {featuresData.map((item, index) => (
            <Feature
              sercice={item.service}
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
