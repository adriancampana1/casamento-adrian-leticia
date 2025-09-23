import { motion } from "framer-motion";
import { Menubar } from "primereact/menubar";
import weddingData from "../data/mockData";
import "./Header.css";

const Header = () => {
  const { couple } = weddingData;

  const items = [
    {
      label: "Início",
      icon: "pi pi-home",
      command: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Sobre Nós",
      icon: "pi pi-heart",
      command: () => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Lista de Presentes",
      icon: "pi pi-gift",
      command: () => {
        document
          .getElementById("gifts")
          ?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "PIX",
      icon: "pi pi-money-bill",
      command: () => {
        document.getElementById("pix")?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const initials = `${couple.groom.charAt(0)} & ${couple.bride.charAt(0)}`;

  return (
    <motion.header
      className="wedding-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="header-content">
        <motion.h1
          className="header-title"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {initials}
        </motion.h1>
        <Menubar model={items} className="wedding-menubar" />
      </div>
    </motion.header>
  );
};

export default Header;
