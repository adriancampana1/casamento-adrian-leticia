import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import weddingData from "../data/mockData";
import "./LocationSection.css";

const LocationSection = () => {
  const { venue, messages } = weddingData;

  const openMaps = () => {
    // Substitua pelas coordenadas reais do local
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      venue.address
    )}`;
    window.open(mapsUrl, "_blank");
  };

  const openWaze = () => {
    // Substitua pelas coordenadas reais do local
    const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
      venue.address
    )}&navigate=yes`;
    window.open(wazeUrl, "_blank");
  };

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="location-header"
        >
          <h2 className="location-title">{messages.location.title}</h2>
          <p className="location-subtitle">{messages.location.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="location-content"
        >
          <Card className="location-card">
            <div className="location-card-content">
              <div className="location-icon">
                <i
                  className="pi pi-map-marker"
                  style={{ fontSize: "2rem" }}
                ></i>
              </div>

              <h3 className="venue-name">{venue.name}</h3>
              <p className="venue-address">{venue.address}</p>

              <div className="venue-details">
                <div className="detail-item">
                  <i className="pi pi-calendar"></i>
                  <span>{venue.date}</span>
                </div>
                <div className="detail-item">
                  <i className="pi pi-clock"></i>
                  <span>{venue.time}</span>
                </div>
              </div>

              <div className="location-actions">
                <Button
                  label="Abrir no Google Maps"
                  icon="pi pi-map"
                  className="location-button maps-button"
                  onClick={openMaps}
                />
                <Button
                  label="Abrir no Waze"
                  icon="pi pi-directions"
                  className="location-button waze-button"
                  onClick={openWaze}
                />
              </div>

              {venue.observations && (
                <div className="venue-observations">
                  <p>{venue.observations}</p>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
