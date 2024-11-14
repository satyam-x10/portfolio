import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={css.container}
      >
        <div className={css.upperElements}>
          <motion.span 
            className="primaryText" 
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Satyam.
          </motion.span>
          
          <motion.span 
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I love diving into projects
            <br />
            and bringing ideas to life.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img 
            variants={slideIn("up", "tween", 0.5, 1.3)} 
            src="./satyam.png" 
            alt="Satyam" 
          />
        </motion.div>

        <motion.a 
          variants={fadeIn("up", "tween", 0.4, 1)}
          className={css.email} 
          href="mailto:satyamx10@gmail.com"
        >
          satyamx10@gmail.com
        </motion.a>

        <div className={css.lowerElements}>
          <motion.div 
            variants={fadeIn("right", "tween", 0.3, 1)} 
            className={css.experience}
          >
            <div className="primaryText">13</div>
            <div className="secondaryText">
              <div>Months</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn("left", "tween", 0.5, 1)} 
            className={css.certificate}
          >
            <img src="./button.png" alt="Certification" />
            <span>CERTIFIED PROFESSIONAL</span>
            <div className={css.certifications}>
              <span>WEB DEVELOPER</span>
              <span>APP DEVELOPER</span>
              <span>GAME DEVELOPER</span>
              <span>BOT DEVELOPER</span>
              <span>PRODUCT STRATEGIST</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;