import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { buildCloudinaryUrl } from "../utils/cloudinary";
import "./PhotoGallery.css";

interface Photo {
  id: string;
  alt: string;
}

const photos: Photo[] = [
  { id: "DSC01262.webp", alt: "Pré-wedding - Momento romântico do casal" },
  { id: "DSC01442.webp", alt: "Pré-wedding - Ensaio fotográfico" },
  { id: "DSC01448.webp", alt: "Pré-wedding - Sorrisos e cumplicidade" },
  { id: "DSC01549.webp", alt: "Pré-wedding - Amor em cada detalhe" },
  { id: "DSC01914.webp", alt: "Pré-wedding - Momentos inesquecíveis" },
  { id: "DSC01929.webp", alt: "Pré-wedding - Felicidade compartilhada" },
  { id: "DSC01957.webp", alt: "Pré-wedding - Juntos para sempre" },
  { id: "DSC02194.webp", alt: "Pré-wedding - Conexão e amor" },
  { id: "DSC02293.webp", alt: "Pré-wedding - Celebrando o amor" },
  { id: "DSC02340.webp", alt: "Pré-wedding - Nossa história" },
];

const PhotoGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="gallery" className="gallery-section" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="gallery-title">Nosso Pré-Wedding</h2>
          <div className="gallery-subtitle">
            Momentos especiais capturados durante nosso ensaio
          </div>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {photos.map((photo) => {
            const thumbnailUrl = buildCloudinaryUrl(photo.id, 400, "auto:low");

            return (
              <motion.div
                key={photo.id}
                className="gallery-item"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={thumbnailUrl}
                    alt={photo.alt}
                    loading="lazy"
                    className="gallery-image"
                    decoding="async"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-zoom-icon">
                      <i className="pi pi-search-plus"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Dialog
        visible={selectedPhoto !== null}
        onHide={() => setSelectedPhoto(null)}
        className="gallery-dialog"
        dismissableMask
        closeOnEscape
        showHeader={false}
        contentClassName="gallery-dialog-content"
      >
        {selectedPhoto && (
          <div className="gallery-lightbox">
            <img
              src={buildCloudinaryUrl(selectedPhoto.id, 1920, "auto:good")}
              alt={selectedPhoto.alt}
              className="gallery-lightbox-image"
              loading="lazy"
            />
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
