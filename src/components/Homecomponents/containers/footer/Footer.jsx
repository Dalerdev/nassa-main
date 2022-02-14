import React from "react";
import gpt3Logo from "../../../../assets/safed.png";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { useScroll } from "../../../../utils/useScroll";
import {
  footerAnimation,
  footerButtonAnimation,
  footerContentAnimation,
} from "../../../../utils/animations";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div ref={element} className="gpt3__footer section__padding">
        <motion.div
          animate={controls}
          variants={footerAnimation}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
          }}
          className="gpt3__footer-heading"
        >
          <h1 className="gradient__text">
            Do you want to step in to the future before others
          </h1>
        </motion.div>

        <motion.div
          animate={controls}
          variants={footerButtonAnimation}
          transition={{
            delay: 0.04,
            type: "tween",
            duration: 0.9,
          }}
          className="gpt3__footer-btn"
        >
          <p>Request Early Access</p>
        </motion.div>

        <motion.div
          animate={controls}
          variants={footerContentAnimation}
          transition={{
            delay: 0.06,
            type: "tween",
            duration: 0.8,
          }}
          className="gpt3__footer-links"
        >
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>
              Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
            </p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p className="footer_links">
              <AiOutlineInstagram />
            </p>
            <p className="footer_links">
              <BsFacebook />
            </p>
            <p className="footer_links">
              <BsTelegram />
            </p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p className="footer_contact">
              <span>
                <AiFillPhone />
              </span>
              +9989 99 049 76 79{" "}
            </p>
            <p className="footer_contact">
              <span>
                <AiOutlineMail />
              </span>
              forfirebasejs@gmail.com
            </p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>NASA</h4>
            <h3 style={{ color: "white" }}>
              Everyone has their own creative world
            </h3>
          </div>
        </motion.div>

        <div className="gpt3__footer-copyright">
          <p>@2021 NASA.io. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
