import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import home from "../../../assets/home.png";
import play from "../../../assets/play.png";
import { smmHomeAnimation } from "../../../utils/animations";
export default function SmmSupportHome() {
  return (
    <div>
      <Section id="smmSupport_home">
        <motion.div
            variants={smmHomeAnimation}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          className="smmSupport_home"
        >
          <div className="smmSupport_content">
            <div className="smmSupport_title">
              <h1>Digital Crafters</h1>
            </div>
            <div className="smmSupport_subTitle">
              <p>
                The not errors rendering handed he you concepts fate objective
                rare boss a road a he while what before to he is size separated
                room cold hunt by and they my
              </p>
            </div>
            <img src={play} alt="Play Button" />
          </div>
        </motion.div>
        <motion.div
          className="smmSupport_info"
          //   variants={homeInfoAnimation}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        >
          <div className="smmSupport_grid">
            <div className="smmSupport_col">
              <strong>Agency</strong>
              <p>Digital Crafters</p>
            </div>
            <div className="smmSupport_col">
              <strong>Email</strong>
              <p>kishansheth21@gmail.com</p>
            </div>
            <div className="smmSupport_col">
              <strong>Mobile</strong>
              <p>+91 1231231131</p>
            </div>
            <div className="smmSupport_col">
              <strong>Address</strong>
              <p>Some Street India,</p>
              <p>960105 India</p>
            </div>
            <div className="smmSupport_col">
              <strong>Services</strong>
              <p>Corporate Identity</p>
              <p>Full Coding</p>
            </div>
            <div className="smmSupport_col">
              <strong>Working Hours</strong>
              <p>Monday to Friday</p>
              <p>08:00 to 18:00</p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .smmSupport_home {
    height: 100%;
    .smmSupport_content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      width: 60%;
      .smmSupport_title {
        margin-top: 12rem;
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .smmSupport_subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .smmSupport_info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .smmSupport_grid {
      display: grid;
      background-color: #ED6991;
      padding: 3rem;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .smmSupport_home {
      .smmSupport_content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .smmSupport_title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .smmSupport_info {
      position: initial;
      .smmSupport_grid {
        grid-template-columns: 1fr;
        background-color: transparent;
      }
    }
  }
`;
