import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Cite from "./components/Cite/Cite.jsx";
import Header from "./components/Header/Header.jsx";
import articles from "./assets/articles.json";
import images from "./assets/images";
import { useState } from "react";
import { getRandomNumber } from "./utils/getRandom";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const getRandomArticle = () => articles[getRandomNumber(articles.length - 1)];
  const [article, setArticle] = useState(getRandomArticle());
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  // Cambio aleatorio de imagenes del fondo
  const changeImage = () => {
    let newBackground = images[getRandomNumber(images.length - 1)];
    while (newBackground === backgroundImage) {
      newBackground = images[getRandomNumber(images.length - 1)];
    }
    setBackgroundImage(newBackground);
  };
  //Lógica de búsqueda
  const searchArticle = (foundArticle) => {
    setArticle(foundArticle);
  }

  return (
    <section className="App" style={{backgroundImage: `url("${backgroundImage}")`}}>
      <Header />
      <main>
        <SearchBar articles={articles} updateArticle={(foundArticle) => searchArticle(foundArticle)}/>
        <Cite
          currentArticle={article}
          changeArticle={() => {
            setArticle(getRandomArticle())
            console.log(article);
          }}
          changeBackground={() => changeImage()}
        />
      </main>
      <Footer />
    </section>
  );
};
export default App;
