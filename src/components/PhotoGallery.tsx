import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import "./PhotoGallery.css";

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: "/images/DSC01262.jpg",
    alt: "Pré-wedding - Momento romântico do casal",
  },
  { src: "/images/DSC01442.jpg", alt: "Pré-wedding - Ensaio fotográfico" },
  { src: "/images/DSC01448.jpg", alt: "Pré-wedding - Sorrisos e cumplicidade" },
  { src: "/images/DSC01549.jpg", alt: "Pré-wedding - Amor em cada detalhe" },
  { src: "/images/DSC01914.jpg", alt: "Pré-wedding - Momentos inesquecíveis" },
  {
    src: "/images/DSC01929.jpg",
    alt: "Pré-wedding - Felicidade compartilhada",
  },
  { src: "/images/DSC01957.jpg", alt: "Pré-wedding - Juntos para sempre" },
  { src: "/images/DSC02194.jpg", alt: "Pré-wedding - Conexão e amor" },
  { src: "/images/DSC02293.jpg", alt: "Pré-wedding - Celebrando o amor" },
  { src: "/images/DSC02340.jpg", alt: "Pré-wedding - Nossa história" },
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="gallery" className="gallery-section" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-zoom-icon">
                    <i className="pi pi-search-plus"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="gallery-lightbox-image"
            />
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
