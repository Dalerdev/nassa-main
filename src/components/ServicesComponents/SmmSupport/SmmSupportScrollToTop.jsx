import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

export default function SmmSupportScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div>
      <Div>
        <a href="#" className={`${visible ? "smmSupport_block" : "smmSupport_none"}`}>
          <FaChevronUp />
        </a>
      </Div>
    </div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .smmSupport_none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: white;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;
