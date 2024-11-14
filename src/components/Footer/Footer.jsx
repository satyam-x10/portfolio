import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { motion } from 'framer-motion';
import { FaInstagram, FaSlack, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      style={{
        padding: '10px', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' // Add a soft shadow effect
      }}
          >
      <motion.div
        variants={footerVariants}
        className="innerWidth  flexCenter"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '18px', fontWeight: '500' }}>
            Let's make something 
          </span>
          <span style={{ fontSize: '18px', fontWeight: '500' }}>
            Start by <a href="mailto:satyamx10@gmail.com">Contacting Me</a>
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontSize: '14px', color: 'gray' }}>My accounts</span>
          </div>
                   
          {/* Social Media Icons */}
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '10px',
            }}
          >
            <a href="https://www.instagram.com/satyamx_10/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} style={{ color: '#000' }} />
            </a>
            
            <a href="https://github.com/satyam-x10" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} style={{ color: '#000' }} />
            </a>
            <a href="https://www.linkedin.com/in/satyamx10/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} style={{ color: '#000' }} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
