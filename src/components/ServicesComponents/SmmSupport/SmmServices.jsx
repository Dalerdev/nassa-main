import React from "react";
import { useScroll } from "../../../utils/useScroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import play from "../../../assets/play.png";
import { smmServicesAnimation } from "../../../utils/animations";
export default function SmmServices() {
  const [element, controls] = useScroll();
  const data = [
    {
      type: "Design",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      image: service1,
    },
    {
      type: "Code",
      text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
      image: service2,
    },
    {
      type: "Support",
      text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
      image: service3,
    },
  ];
  return (
    <div>
      <Section id="smmSupport_services" ref={element}>
        <div className="smmSupport_services">
          {data.map((service, index) => {
            return (
              <motion.div
                className="smmSupport_services__service"
                key={service.type}
                variants={smmServicesAnimation}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="smmSupport_services__service__image">
                  <img src={service.image} alt="service" />
                </div>
                <div className="smmSupport_services__service__title">
                  <span>0{index + 1}</span>
                  <h2>{service.type}</h2>
                </div>
                <p className="smmSupport_services__service__description">{service.text}</p>
                <img src={play} alt="Play" />
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .smmSupport_services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(3) {
        background-color: var(--primary-color);
        .smmSupport_services__service__title {
          span {
            color: white;
          }
        }
        .smmSupport_services__service__description {
          color: white;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .smmSupport_services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;
