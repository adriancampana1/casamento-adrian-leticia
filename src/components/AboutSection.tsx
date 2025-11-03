import weddingData from "../data/mockData";
import "./AboutSection.css";

const AboutSection = () => {
  const { couple } = weddingData;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title">Nossa História</h2>
            <div className="about-subtitle">Bem-vindos ao nosso grande dia</div>
          </div>

          <div className="about-story">
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
          </div>

          <div className="about-couple">
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
          </div>

          <div className="about-date-info">
            <div className="date-card">
              <div className="date-label">Celebraremos em</div>
              <div className="date-value">{couple.weddingDate}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
