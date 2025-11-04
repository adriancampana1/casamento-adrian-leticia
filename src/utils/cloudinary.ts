// Configuração do Cloudinary
export const CLOUDINARY_CLOUD_NAME = "dondoum4g";
export const CLOUDINARY_FOLDER = ""; // Imagens estão na raiz, não em pasta

/**
 * Detecta se é dispositivo mobile
 */
const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

/**
 * Detecta se a conexão é lenta (3G ou inferior)
 */
const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conn = (navigator as any).connection;
  if (!conn) return false;
  
  // Detecta 2G, slow-2g, ou saveData ativado
  const slowTypes = ['slow-2g', '2g', '3g'];
  return slowTypes.includes(conn.effectiveType) || conn.saveData === true;
};

/**
 * Retorna largura ideal baseada no dispositivo e conexão
 */
const getResponsiveWidth = (desktopWidth: number): number => {
  if (isMobile()) {
    // Mobile: usa imagens menores para economizar dados
    if (isSlowConnection()) {
      // Em conexões lentas, reduz ainda mais
      return Math.min(desktopWidth, 600);
    }
    return Math.min(desktopWidth, 800);
  }
  return desktopWidth;
};

/**
 * Retorna qualidade baseada na conexão
 */
const getAdaptiveQuality = (baseQuality: string): string => {
  if (isSlowConnection()) {
    // Em conexões lentas, sempre usa qualidade baixa
    return 'auto:low';
  }
  return baseQuality;
};

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
  const responsiveWidth = getResponsiveWidth(width);
  const adaptiveQuality = getAdaptiveQuality(quality);
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_${adaptiveQuality},w_${responsiveWidth},c_limit/${folder}${publicId}`;
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
  const responsiveWidth = getResponsiveWidth(width);
  // Usa qualidade baixa e adiciona blur para backgrounds
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto:low,w_${responsiveWidth},c_limit,e_blur:300/${folder}${publicId}`;
};
