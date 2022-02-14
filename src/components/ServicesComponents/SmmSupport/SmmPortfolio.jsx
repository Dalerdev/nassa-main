import React from "react";
import placeholder from "../../../assets/placeholder.png";
import loadmore from "../../../assets/loadmore.png";
import portfolio1 from "../../../assets/portfolio1.png";
import portfolio2 from "../../../assets/portfolio2.png";
import { motion } from "framer-motion";
import { useScroll } from "../../../utils/useScroll";
import styled from "styled-components";
import { smmPortfolioAnimation } from "../../../utils/animations";

export default function SmmPortfolio() {
  const [element, controls] = useScroll();

  return (
    <div>
      <Section id="smmSupport_portfolio" ref={element}>
        <div className="smmSupport_background">
          <img src={portfolio1} alt="Design" className="smmSupport_design1" />
          <img src={portfolio2} alt="Design" className="smmSupport_design2" />
        </div>
        <div className="smmSupport_portfolio__title">
          <p>Our Work</p>
          <h2>Check our super awesome portfolio</h2>
        </div>
        <div className="smmSupport_grid">
          <motion.div
            className="smmSupport_child-one smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            whileInView={{ opacity: 1 }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-two smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-three smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-four smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-five smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-six smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-seven smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="smmSupport_child-eight smmSupport_grid-box"
            variants={smmPortfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
        </div>
        <div className="smmSupport_portfolio-more">
          <span>Load More</span>
          <img src={loadmore} alt="Load More" />
        </div>
      </Section>
    </div>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);
  .smmSupport_background {
    position: relative;
    .smmSupport_design1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .smmSupport_design2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }
  .smmSupport_sideTitle {
    z-index: 2;
    h1 {
      color: white;
    }
  }
  .smmSupport_portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .smmSupport_grid {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .smmSupport_grid-box {
      height: 15rem;
      width: 100%;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        transition: 0.4s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        background-color: #8860e66a;
        z-index: 10;
      }
      &:nth-of-type(2) {
        z-index: 10;
        grid-area: two;
        background-color: #662d91ca;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background-color: #8860e6b0;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        z-index: 10;
        grid-area: five;
        background-color: #8860e6b0;
      }
      &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
        background-color: #662d91ca;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        background-color: #8860e66a;
        height: 100%;
      }
      &:nth-of-type(8) {
        z-index: 10;
        grid-area: eight;
      }
    }
  }
  .smmSupport_portfolio-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4rem 0;
    span {
      color: white;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .smmSupport_background {
      display: none;
    }
    .smmSupport_portfolio__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .smmSupport_grid {
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .smmSupport_grid-box {
        height: 10rem !important;
      }
    }
  }
`;
