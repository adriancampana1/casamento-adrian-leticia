import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import weddingData from "../data/mockData";
import "./AboutSection.css";

const AboutSection = () => {
  const { couple } = weddingData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="about-title">Nossa História</h2>
            <div className="about-subtitle">Bem-vindos ao nosso grande dia</div>
          </motion.div>

          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="story-text">
              <p>
                É com muita alegria que convidamos você para celebrar conosco o
                início de uma nova jornada. Depois de anos compartilhando
                sonhos, construindo memórias e crescendo juntos, chegou o
                momento de oficializar nosso amor.
              </p>

              <p>
                Queremos que você faça parte deste momento tão importante em
                nossas vidas. Sua presença tornará nosso dia ainda mais especial
                e marcante.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-couple"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="couple-names">
              <div className="couple-name bride">
                <div className="name-initial">{couple.bride.charAt(0)}</div>
                <div className="name-text">{couple.bride}</div>
              </div>

              <div className="couple-connector">
                <div className="connector-line"></div>
                <div className="connector-heart">💕</div>
                <div className="connector-line"></div>
              </div>

              <div className="couple-name groom">
                <div className="name-initial">{couple.groom.charAt(0)}</div>
                <div className="name-text">{couple.groom}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-date-info"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="date-card">
              <div className="date-label">Celebraremos em</div>
              <div className="date-value">{couple.weddingDate}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
