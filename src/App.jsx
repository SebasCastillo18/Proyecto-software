import { useState } from "react";
import { getRandomNumber } from "./utils/getRandom";
import images from "./assets/images";
import Header from "./components/Header/Header.jsx";
import Reglamento from "./components/Reglamento/Reglamento.jsx";
import Gratuidad from "./components/Gratuidad/Gratuidad";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [isReglamentoSelected, setIsReglamentoSelected] = useState(true);
  // Cambio aleatorio de imagenes del fondo
  const changeImage = () => {
    let newBackground = images[getRandomNumber(images.length - 1)];
    while (newBackground === backgroundImage) {
      newBackground = images[getRandomNumber(images.length - 1)];
    }
    setBackgroundImage(newBackground);
  };
  
  return (
    <section
      className="App"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <Header
        selected={isReglamentoSelected}
        switchInfo={() => {
          setIsReglamentoSelected(!isReglamentoSelected);
        }}
      />
      <main>
        {isReglamentoSelected ? (
          <Reglamento
            changeBackground={() => changeImage()}
          />
        ) : (
          <Gratuidad
            changeBackground={() => changeImage()}
          />
        )}
      </main>
      <Footer />
    </section>
  );
};
export default App;
