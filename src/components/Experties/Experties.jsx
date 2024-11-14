import React from "react";
import { achievementsData, WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";

const Experties = () => {
  return (
    <section className={css.wrapper}>
      <span className="primaryText yPaddings xPaddings">My Achievements</span>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {achievementsData.map((exp, i) => {
            return (
              <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex p-6">
                {/* Content container on the right */}
                <div className="ml-6 flex-1">
                  <div className="mb-2 flex">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                  </div>
                  <br />
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {exp.linkText}
                  </a>
                </div>
              </div>
            </div>
            
            );
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">What do I help? </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
