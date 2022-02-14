import { motion } from "framer-motion";
import React from "react";
import { whyNasa } from "../../../../utils/animations";
import { useScroll } from "../../../../utils/useScroll";
import Feature from "../../feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div ref={element} className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <motion.div
          variants={whyNasa}
          animate={controls}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
        >
          <div className="gpt3__whatgpt3-feature">
            <Feature
              title="What is NASA"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            />
          </div>
          <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">
              The possibilities are beyond your imagination
            </h1>
            <p>Explore the Library</p>
          </div>
          <div className="gpt3__whatgpt3-container">
            <Feature
              more="See more"
              titlemain="Design"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
            <Feature
              more="See more"
              titlemain="Smm"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
            <Feature
              more="See more"
              titlemain="Website "
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WhatGPT3;
