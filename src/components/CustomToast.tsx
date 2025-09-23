import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CustomToast.css";

interface CustomToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  isVisible: boolean;
  onClose: () => void;
}

const CustomToast = ({
  message,
  type = "success",
  duration = 3000,
  isVisible,
  onClose,
}: CustomToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "info":
        return "ⓘ";
      default:
        return "✓";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`custom-toast custom-toast-${type}`}
          initial={{
            opacity: 0,
            x: 100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 100,
            scale: 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          <div className="toast-content">
            <div className="toast-icon">{getIcon()}</div>
            <div className="toast-message">{message}</div>
            <button
              className="toast-close"
              onClick={onClose}
              aria-label="Fechar notificação"
            >
              ✕
            </button>
          </div>
          <motion.div
            className="toast-progress"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomToast;
