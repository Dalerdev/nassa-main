import React from "react";
import people from "../../../../assets/people.png";
import "./header.css";
import { motion } from "framer-motion";
import {
  homeLeftAnimation,
  homeRightAnimation,
} from "../../../../utils/animations";
import { useScroll } from "../../../../utils/useScroll";
const Header = () => {
  const [element, controls] = useScroll();
  return (
    <div ref={element} className="gpt3__header " id="home">
      <motion.div
        variants={homeLeftAnimation}
        animate={controls}
        transition={{
          duration: 0.6,
          type: "tween",
        }}
        className="gpt3__header-content"
      >
        <span className="header_main_text">
          Более 300 брендов в портфолио <br /> за 4 года работы
        </span>
        <div className="features_line"></div>
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with NASA.io
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Send</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>100 people requested access a visit recently</p>
        </div>
      </motion.div>

      <motion.div
      animate={controls}
        variants={homeRightAnimation}
        transition={{ duration: 0.3, type: "tween" }}
        className="gpt3__header-image"
      >
        <img src="https://xspace.uz/wp-content/uploads/2020/05/IMG_8766.jpg" />
      </motion.div>
    </div>
  );
};

export default Header;
