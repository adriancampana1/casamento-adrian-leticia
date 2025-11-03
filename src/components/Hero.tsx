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
        {/* Elementos flutuantes com animação CSS suave */}
        <div className="floating-element floating-element-1" />
        <div className="floating-element floating-element-2" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-date-badge">
            {couple.weddingDate}
          </div>

          <h1 className="hero-title">
            {couple.bride} & {couple.groom}
          </h1>

          <p className="hero-subtitle">
            {messages.hero.subtitle}
          </p>

          <div className="hero-countdown">
            <CountdownTimer targetDate={couple.weddingDateTime} />
          </div>

          <div className="hero-actions">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
