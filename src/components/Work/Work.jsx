import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import { motion } from 'framer-motion';
import { 
  fadeIn, 
  staggerChildren, 
  textVariant2, 
  zoomIn 
} from "../../utils/motion";

const Work = () => {
  return (
    <motion.section 
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={css.wrapper}
    >
      <a className="anchor" id="work"></a>

      <div className={css.container}>
        <motion.span 
          variants={fadeIn("down", "tween", 0.2, 1)}
          className={css.heading}
        >
          My Work Experience
        </motion.span>

        <div className={css.experiences}>
          {workExp.map((exp, index) => (
            <motion.div
              variants={textVariant2}
              key={index}
              className={css.exp}
            >
              <motion.div 
                variants={fadeIn("right", "tween", 0.2 * index, 0.5)}
                className={css.post}
              >
                <h1>{exp.place}</h1>
                <p>{exp.tenure}</p>
                <strong>{exp.location}</strong>
              </motion.div>

              <motion.div 
                variants={fadeIn("left", "tween", 0.2 * index, 0.5)}
                className={css.role}
              >
                <h1>{exp.role}</h1>
                <p>{exp.detail}</p>
              </motion.div>
            </motion.div>
          ))}

          <motion.div 
            variants={zoomIn(0.5, 0.8)} 
            className={css.progressbar}
          >
            <motion.div 
              variants={fadeIn("down", "tween", 0.3, 1)} 
              className={css.line}
            />
            {workExp.map((_, index) => (
              <div key={index}>
                <motion.div 
                  variants={zoomIn(0.3 * index, 0.6)}
                  className={css.circle} 
                  style={{
                    background: index === 0 ? "#286F6C" : 
                             index === 1 ? "#F2704E" : "#EEC048"
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;