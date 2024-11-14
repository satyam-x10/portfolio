import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { CiLinkedin } from "react-icons/ci";
import { MdAppRegistration } from "react-icons/md";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Peoples Opinion on me</span>
          <p style={{ marginTop: "2rem" }}>
            I have consistently demonstrated my capabilities, earning the trust
            and confidence of those around me.
          </p>
          <br />
          <strong>
            True fulfillment comes when our efforts are validated, reinforcing
            the value of our dedication and hard work.
          </strong>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <div
                    className={css.icons}
                    style={{ display: "flex", gap: "10px" }}
                  >
                    <a
                      href={comment.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CiLinkedin size={30} style={{ color: "#0077b5" }} />
                    </a>
                    <a
                      href={comment.lor}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsFillHandThumbsUpFill
                        size={30}
                        style={{ color: "#0077b5" }}
                      />
                    </a>
                    <a
                      href={comment.product}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdAppRegistration
                        size={30}
                        style={{ color: "teal" }}
                      />
                    </a>
                  </div>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <strong>{comment.post}</strong>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
