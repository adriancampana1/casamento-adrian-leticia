import { lazy, Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";

const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
const LocationSection = lazy(() => import("./components/LocationSection"));
const GiftList = lazy(() => import("./components/GiftList"));
const PixSection = lazy(() => import("./components/PixSection"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutSection />
      <Suspense fallback={<div style={{ minHeight: "50vh" }} />}>
        <LocationSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "50vh" }} />}>
        <PhotoGallery />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "50vh" }} />}>
        <GiftList />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "50vh" }} />}>
        <PixSection />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: "20vh" }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
