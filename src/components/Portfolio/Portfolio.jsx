import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { projects } from "../../utils/data";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Proud Projects</span>
            <p style={{ marginTop: "10px" }}>
              U Learn more from Projects than Tutorial hells
            </p>
          </div>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {projects.map((project, i) => (
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src={project.img} alt="project" />
          // <span className="primaryText">{project.name}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
