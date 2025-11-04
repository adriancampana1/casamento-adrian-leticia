import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import { ProgressSpinner } from "primereact/progressspinner";
import {
  buildCloudinaryUrl,
  buildCloudinaryThumbnail,
} from "../utils/cloudinary";
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
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

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

  useEffect(() => {
    if (selectedPhoto) {
      setIsImageLoading(true);
      setHasImageError(false);
    } else {
      setIsImageLoading(false);
      setHasImageError(false);
    }
  }, [selectedPhoto]);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
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
            // Usa função especializada para thumbnails com boa qualidade
            const thumbnailUrl = buildCloudinaryThumbnail(photo.id, 500);

            return (
              <motion.div
                key={photo.id}
                className="gallery-item"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => handlePhotoClick(photo)}
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
        onHide={() => {
          setSelectedPhoto(null);
          setIsImageLoading(false);
          setHasImageError(false);
        }}
        className="gallery-dialog"
        dismissableMask
        closeOnEscape
        showHeader={false}
        contentClassName="gallery-dialog-content"
      >
        {selectedPhoto && (
          <div
            className="gallery-lightbox"
            aria-busy={isImageLoading}
            aria-live="polite"
          >
            {isImageLoading && (
              <div className="gallery-loading">
                <ProgressSpinner
                  style={{ width: "72px", height: "72px" }}
                  strokeWidth="3"
                  animationDuration="1.25s"
                />
                <p className="gallery-loading-text">Carregando imagem...</p>
              </div>
            )}

            {hasImageError && !isImageLoading && (
              <div className="gallery-loading-error">
                <i
                  className="pi pi-exclamation-triangle"
                  aria-hidden="true"
                ></i>
                <p>Não foi possível carregar a imagem. Tente novamente.</p>
              </div>
            )}

            <img
              src={buildCloudinaryUrl(selectedPhoto.id, 1920, "auto:good")}
              alt={selectedPhoto.alt}
              className={`gallery-lightbox-image ${
                isImageLoading || hasImageError ? "is-hidden" : "is-visible"
              }`}
              loading="lazy"
              onLoad={() => setIsImageLoading(false)}
              onError={() => {
                setIsImageLoading(false);
                setHasImageError(true);
              }}
            />
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
