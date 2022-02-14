import { motion } from "framer-motion";
import React from "react";
import possibilityImage from "../../../../assets/possibility.png";
import { reasonsAnimation, videoAnimation } from "../../../../utils/animations";
import { useScroll } from "../../../../utils/useScroll";
import "./possibility.css";

const Possibility = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div
        ref={element}
        className="gpt3__possibility section__padding"
        id="possibility"
      >
        <motion.div
          variants={videoAnimation}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="gpt3__possibility-image"
        >
          <img src={possibilityImage} alt="possibility" />
        </motion.div>
        <motion.div
          variants={reasonsAnimation}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className="gpt3__possibility-content"
        >
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">
            The possibilities are <br /> beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </motion.div>
      </div>
    </>
  );
};

export default Possibility;
