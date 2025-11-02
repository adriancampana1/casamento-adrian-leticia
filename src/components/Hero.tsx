import { motion } from "framer-motion";
import { Button } from "primereact/button";
import weddingData from "../data/mockData";
import CountdownTimer from "./CountdownTimer";
import "./Hero.css";

const Hero = () => {
  const { couple, messages } = weddingData;

  const scrollToLocation = () => {
    document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGifts = () => {
    document.getElementById("gifts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <motion.div
          className="floating-element floating-element-1"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-element floating-element-2"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -3, 3, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="hero-date-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {couple.weddingDate}
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {couple.bride} & {couple.groom}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {messages.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero-countdown"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <CountdownTimer targetDate={couple.weddingDateTime} />
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Button
              label="Ver Local e Horário"
              icon="pi pi-map-marker"
              className="hero-button primary"
              onClick={scrollToLocation}
            />
            <Button
              label="Lista de Presentes"
              icon="pi pi-gift"
              className="hero-button secondary"
              onClick={scrollToGifts}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
