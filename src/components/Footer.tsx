import { motion } from "framer-motion";
import weddingData from "../data/mockData";
import "./Footer.css";

const Footer = () => {
  const { couple, messages } = weddingData;

  return (
    <footer className="wedding-footer">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="footer-content"
        >
          <div className="footer-heart">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💕
            </motion.div>
          </div>

          <h3 className="footer-title">
            {couple.groom} & {couple.bride}
          </h3>
          <p className="footer-date">{couple.weddingDate}</p>
          <p className="footer-message">{messages.footer.message}</p>

          <div className="footer-divider"></div>

          <p className="footer-copyright">{messages.footer.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
