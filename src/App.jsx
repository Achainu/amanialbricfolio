import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";

import Navbar from "./components/session/Navbar";
import Accueil from "./components/session/Accueil";
import Apropos  from "./components/session/Apropos";
import Projets  from "./components/session/Projets";
import Contact from './components/session/Contact';
import Footer from './components/session/footer';
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }text-gray-100`}
      >
        <Navbar />
        <Accueil />
        <Apropos />
        <Projets />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
