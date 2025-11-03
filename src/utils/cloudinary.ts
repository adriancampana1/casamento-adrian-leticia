// Configuração do Cloudinary
export const CLOUDINARY_CLOUD_NAME = "dondoum4g";
export const CLOUDINARY_FOLDER = ""; // Imagens estão na raiz, não em pasta

/**
 * Gera URL otimizada do Cloudinary para imagens
 * @param publicId - ID público da imagem no Cloudinary (ex: "DSC01442")
 * @param width - Largura desejada em pixels
 * @param quality - Qualidade da imagem (auto:low, auto:good, auto:best, ou número)
 * @returns URL otimizada do Cloudinary
 */
export const buildCloudinaryUrl = (
  publicId: string,
  width: number,
  quality: string = "auto"
): string => {
  // Remove a pasta se estiver vazia
  const folder = CLOUDINARY_FOLDER ? `${CLOUDINARY_FOLDER}/` : "";
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_${quality},w_${width},c_limit/${folder}${publicId}`;
};

/**
 * Gera URL otimizada para imagens de fundo (background)
 * Usa qualidade menor e blur para melhor performance
 */
export const buildCloudinaryBackgroundUrl = (
  publicId: string,
  width: number = 1920
): string => {
  // Remove a pasta se estiver vazia
  const folder = CLOUDINARY_FOLDER ? `${CLOUDINARY_FOLDER}/` : "";
  // Usa qualidade baixa e adiciona blur para backgrounds
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto:low,w_${width},c_limit,e_blur:300/${folder}${publicId}`;
};
