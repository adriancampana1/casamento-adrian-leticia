import { motion } from "framer-motion";
import { Button } from "primereact/button";
import weddingData from "../data/mockData";
import CountdownTimer from "./CountdownTimer";
import { buildCloudinaryBackgroundUrl } from "../utils/cloudinary";
import "./Hero.css";

const Hero = () => {
  const { couple, messages } = weddingData;

  const scrollToLocation = () => {
    document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGifts = () => {
    document.getElementById("gifts")?.scrollIntoView({ behavior: "smooth" });
  };

  // URL otimizada do Cloudinary para a imagem de fundo
  const backgroundImageUrl = buildCloudinaryBackgroundUrl(
    "DSC01442.webp",
    1920
  );

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        {/* Imagem de fundo otimizada do Cloudinary */}
        <div
          className="hero-background-image"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        />
        <div className="hero-overlay"></div>
        {/* Elementos flutuantes otimizados - apenas transform/opacity */}
        <motion.div
          className="floating-element floating-element-1"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-element floating-element-2"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="hero-date-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {couple.weddingDate}
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {couple.bride} & {couple.groom}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {messages.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero-countdown"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <CountdownTimer targetDate={couple.weddingDateTime} />
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
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
