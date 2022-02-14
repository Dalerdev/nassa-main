import gsap, { Linear, snap, TimelineMax, TweenLite } from "gsap/all";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import "./styles.scss";
// import
import { TweenMax } from "gsap/all";
import { Controller, Scene } from "scrollmagic";
export default function WebSupportPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".banner3d-1", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-2", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-3", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-4", { perspectiveOrigin: "left -100vh" });

    gsap.to(".banner3d-1", {
      scrollTrigger: {
        trigger: ".banner3d-1",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "center 100vh",
      ease: "none",
    });

    gsap.to(".banner3d-2", {
      scrollTrigger: {
        trigger: ".banner3d-2",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "center 100vh",
      ease: "none",
    });

    gsap.to(".banner3d-3", {
      scrollTrigger: {
        trigger: ".banner3d-3",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "center 100vh",
      ease: "none",
    });

    gsap.to(".banner3d-4", {
      scrollTrigger: {
        trigger: ".banner3d-4",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "left 100vh",
      ease: "none",
    });
  });


  return (
    <div className="webSupport">
      <div className="webSupport_first_content">
        <section className="full">scroll down</section>
        <section className="banner">
          <div className="banner3d-1">
            <div className="banner3d-1-front">
              just a 3d banner
              <br />
              made with gsap
              <br />
              and scrolltrigger
            </div>
          </div>
        </section>
        <section className="mini" />
        <section className="banner">
          <div className="banner3d-2">
            <div className="banner3d-2-front">
              oh that's cool
              <br />i didn't expect that...
            </div>
          </div>
        </section>
        <section className="half">scroll more</section>
        <section className="banner">
          <div className="banner3d-3">
            <div className="banner3d-3-front">
              it's all
              <br />
              about
              <br />
              perspective
            </div>
          </div>
          <div className="image" />
        </section>
        <section className="half">it's not over yet</section>
        <section className="banner">
          <div className="image2" />
          <div className="banner3d-4">
            <div className="banner3d-4-front">
              well
              <br />
              that was cool
              <br />
              but
              <br />
              it's time
              <br />
              to end
              <br />
              the show...
            </div>
          </div>
        </section>
        <section className="full">bisous</section>
      </div>
   
    </div>
  );
}
