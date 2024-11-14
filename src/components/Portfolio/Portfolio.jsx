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
            <br />
            <br />
            <strong style={{ marginTop: "10px" }}>
              You Learn more from Projects than Tutorial hells
            </strong>
          </div>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            padding: "2rem",
            width: "100%",
          }}
        >
          {projects.map((project, i) => (
            <div
              
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                textAlign: "center",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease",
                padding: "1rem",
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.15)")
              }
            >
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: "1rem 0",
                  display: "block",
                }}
              >
                {project.name}
              </span>
              <img
                src={project.img}
                alt={`${project.name} image`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  margin: "0.5rem 1rem 1rem",
                }}
              >
                {project.detail}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                }}
              >
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#f0f0f0",
                      padding: "0.3rem 0.7rem",
                      fontSize: "0.8rem",
                      borderRadius: "5px",
                      color: "#333",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
