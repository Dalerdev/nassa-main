import React from "react";
// import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import { Article } from "../..";
import { motion } from "framer-motion";
import { useScroll } from "../../../../utils/useScroll";
import { whyNasa } from "../../../../utils/animations";

const Blog = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <div ref={element} className="gpt3__blog section__padding" id="blog">
        <motion.div
          variants={whyNasa}
          animate={controls}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
          className="gpt3__blog-heading"
        >
          <h1 className="gradient__text">
            A lot is happening, <br /> We are helping people.
          </h1>
        </motion.div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blog01}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article
              imgUrl={blog02}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog03}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog04}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
            <Article
              imgUrl={blog05}
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
