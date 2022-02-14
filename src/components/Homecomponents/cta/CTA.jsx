import { motion } from "framer-motion";
import React from "react";
import { ctaButton } from "../../../utils/animations";
import { useScroll } from "../../../utils/useScroll";
import "./cta.css";

const CTA = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="gpt3__cta" ref={element}>
        <div className="gpt3__cta-content">
          <p>Request Early Access to Get Started</p>
          <h3>Register Today & start exploring the endless possibilities.</h3>
        </div>
        <div className="gpt3__cta-btn">
          <motion.button
            animate={controls}
            variants={ctaButton}
            transition={{
              duration: 1,
            }}
            type="button"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default CTA;
