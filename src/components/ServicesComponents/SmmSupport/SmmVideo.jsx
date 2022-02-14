import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import video1 from "../../../assets/video1.png";
import video2 from "../../../assets/video2.png";
import { smmVideoAnimation } from "../../../utils/animations";
// import { motion } from "framer-motion";

export default function SmmVideo() {
  return (
    <div>
      <Section>
        <div className="smmSupport_background">
          <img src={video1} alt="Design" className="smmSupport_design1" />
          <img src={video2} alt="Design" className="smmSupport_design2" />
        </div>
        <motion.div
          className="smmSupport_video"
          variants={smmVideoAnimation}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          <iframe
            width="960"
            height="515"
            src="https://www.youtube.com/embed/B_RNoAScPMI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </Section>
    </div>
  );
}


const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .smmSupport_video {
    z-index: 10;
  }
  .smmSupport_background {
    .smmSupport_design1 {
      position: absolute;
      left: 0;
      bottom: -8rem;
      width: 18rem;
    }
    .smmSupport_design2 {
      position: absolute;
      right: 5rem;
      top: 3rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .smmSupport_background {
      display: none;
    }
    height: 100%;
    padding: 6rem 2rem;
    .smmSupport_video {
      iframe {
        height: 10rem;
        width: 80vw;
      }
    }
  }
`;