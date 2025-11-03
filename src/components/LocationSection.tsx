import { Card } from "primereact/card";
import { Button } from "primereact/button";
import weddingData from "../data/mockData";
import { buildCloudinaryBackgroundUrl } from "../utils/cloudinary";
import "./LocationSection.css";

const LocationSection = () => {
  const { venue, messages } = weddingData;

  const openMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      venue.address
    )}`;
    window.open(mapsUrl, "_blank");
  };

  const openWaze = () => {
    const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
      venue.address
    )}&navigate=yes`;
    window.open(wazeUrl, "_blank");
  };

  // URL otimizada do Cloudinary para a imagem de fundo
  const backgroundImageUrl = buildCloudinaryBackgroundUrl(
    "DSC02194.webp",
    1920
  );

  return (
    <section id="location" className="location-section">
      {/* Imagem de fundo otimizada do Cloudinary */}
      <div
        className="location-background-image"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />
      <div className="location-container">
        <div className="location-header">
          <h2 className="location-title">{messages.location.title}</h2>
          <p className="location-subtitle">{messages.location.subtitle}</p>
        </div>

        <div className="location-content">
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
