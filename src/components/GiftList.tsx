import { motion } from "framer-motion";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import weddingData from "../data/mockData";
import "./GiftList.css";

const GiftList = () => {
  const { giftStores, messages } = weddingData;

  return (
    <section id="gifts" className="gifts-section">
      <div className="gifts-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gifts-header"
        >
          <h2 className="gifts-title">{messages.gifts.title}</h2>
          <p className="gifts-subtitle">{messages.gifts.subtitle}</p>
        </motion.div>

        <div className="gifts-grid">
          {giftStores.map((store, index) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="gift-card">
                <div className="gift-card-content">
                  <div className="gift-icon" style={{ color: store.color }}>
                    <i className={store.icon}></i>
                  </div>

                  <h3 className="gift-store-name">{store.name}</h3>
                  <p className="gift-description">{store.description}</p>

                  <Button
                    label="Ver Lista"
                    icon="pi pi-external-link"
                    className="gift-button"
                    onClick={() => window.open(store.link, "_blank")}
                    style={{
                      background: `linear-gradient(135deg, ${store.color}, ${store.color}dd)`,
                      border: "none",
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gifts-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p>{messages.gifts.note}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftList;
