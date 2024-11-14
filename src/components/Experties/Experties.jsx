import React from "react";
import { achievementsData, WhatDoIHelp } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";

const Experties = () => {
  return (
    <section className={css.wrapper}>
            <a className="anchor" id="experties"></a>

      <motion.span 
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        className={css.headingText}
      >
        My Achievements
      </motion.span>
      
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={css.container}
      >
        {/* Left Side - Achievements */}
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={css.leftSide}
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.2 * index, 0.6)}
              className={css.achievementCard}
            >
              <div className={css.cardContent}>
                <h3 className={css.title}>{achievement.title}</h3>
                <p className={css.description}>{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.link}
                  >
                    {achievement.linkText || 'Learn More'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - What do I help? */}
        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          className={css.rightSide}
        >
          <span className={css.primaryText}>What do I help?</span>
          {WhatDoIHelp.map((paragraph, index) => (
            <motion.span
              key={index}
              variants={fadeIn("up", "tween", 0.1 * index, 0.6)}
              className={css.secondaryText}
            >
              {paragraph}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;