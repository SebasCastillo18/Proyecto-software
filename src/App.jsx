import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Cite from "./components/Cite/Cite.jsx";
import Header from "./components/Header/Header.jsx";
import articles from "./assets/articles.json";
import { useState } from "react";
import { getRandomNumber } from "./utils/getRandom";

const App = () => {
  const getRandomArticle = () => articles[getRandomNumber(articles.length - 1)];
  const [article, setArticle] = useState(getRandomArticle());

  return (
    <section className="App">
      <Header />
      <Cite
        currentArticle={article}
        changeArticle={() => setArticle(getRandomArticle())}
      />
      <Footer />
    </section>
  );
};
export default App;
