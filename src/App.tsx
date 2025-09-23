import { motion } from "framer-motion";
import "./App.css";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import LocationSection from "./components/LocationSection";
import GiftList from "./components/GiftList";
import PixSection from "./components/PixSection";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <AboutSection />
      <GiftList />
      <PixSection />
      <LocationSection />
      <Footer />
    </motion.div>
  );
}

export default App;
