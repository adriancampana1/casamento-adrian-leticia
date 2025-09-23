import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import QRCode from "react-qr-code";
import CustomToast from "./CustomToast";
import weddingData from "../data/mockData";
import "./PixSection.css";

const PixSection = () => {
  const [showQR, setShowQR] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { pixInfo, messages } = weddingData;

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixInfo.key);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <section id="pix" className="pix-section">
      <CustomToast
        message="Chave PIX copiada para a área de transferência!"
        type="success"
        isVisible={showToast}
        onClose={handleCloseToast}
        duration={3000}
      />
      <div className="pix-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pix-header"
        >
          <h2 className="pix-title">{messages.pix.title}</h2>
          <p className="pix-subtitle">{messages.pix.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pix-content"
        >
          <Card className="pix-card">
            <div className="pix-card-content">
              <div className="pix-icon">
                <i className="pi pi-qrcode"></i>
              </div>

              <h3>Dados para PIX</h3>

              <div className="pix-info">
                <div className="pix-field">
                  <label>Chave PIX:</label>
                  <div className="pix-value">
                    <span>{pixInfo.key}</span>
                    <Button
                      icon="pi pi-copy"
                      className="p-button-text pix-copy-btn"
                      onClick={copyPixKey}
                      tooltip="Copiar chave PIX"
                    />
                  </div>
                </div>

                <div className="pix-field">
                  <label>Favorecido:</label>
                  <span>{pixInfo.name}</span>
                </div>
              </div>

              <div className="pix-actions">
                <Button
                  label={showQR ? "Ocultar QR Code" : "Mostrar QR Code"}
                  icon={showQR ? "pi pi-eye-slash" : "pi pi-eye"}
                  className="pix-qr-button"
                  onClick={() => setShowQR(!showQR)}
                />
              </div>

              {showQR && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="qr-container"
                >
                  <div className="qr-code">
                    <QRCode
                      value={pixInfo.qrCode}
                      size={200}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <p className="qr-instruction">
                    Escaneie com o app do seu banco
                  </p>
                </motion.div>
              )}

              <div className="pix-note">
                <p>{messages.pix.note}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PixSection;
