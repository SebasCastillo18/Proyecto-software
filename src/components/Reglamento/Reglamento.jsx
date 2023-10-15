import { useState } from "react";
import { getRandomNumber } from "../../utils/getRandom.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import articles from "../../assets/articles.json";
import "./Reglamento.css";

const Reglamento = ({
  changeBackground
}) => {
  const getRandomArticle = () => articles[getRandomNumber(articles.length - 1)];
  const [article, setArticle] = useState(getRandomArticle());
  const [randomOrder, setRandomOrder] = useState([article]);
  const [articleIndex, setArticleIndex] = useState(0);
  // Cambio de articulo y guardado de orden aleatorio generado
  const changeArticle = () => {
    // Si no hay mas articulo establecidos en la lista delante del actual
    if (articleIndex === randomOrder.length - 1) {
      let newArticle = getRandomArticle();
      let newRandomOrder = [...randomOrder, newArticle];
      setArticle(newArticle);
      setRandomOrder(newRandomOrder);
      setArticleIndex(articleIndex + 1);
    }
    // Si el usuario se regresó y está volviendo a ir adelante
    else {
      let nextArticle = randomOrder[articleIndex + 1];
      setArticle(nextArticle);
      setArticleIndex(articleIndex + 1);
    }
  };
  // Lógica para volver al articulo anterior
  const handleBack = () => {
    if (articleIndex > 0) {
      if (randomOrder.length > 1) {
        setArticle(randomOrder[articleIndex - 1]);
        setArticleIndex(articleIndex - 1);
        changeBackground();
      }
    }
  };
  //Lógica de búsqueda
  const searchArticle = (foundArticle) => {
    if (!(foundArticle.number === article.number)) {
      if (articleIndex === randomOrder.length - 1) {
        let newRandomOrder = [...randomOrder, foundArticle];
        setArticle(foundArticle);
        setRandomOrder(newRandomOrder);
        setArticleIndex(articleIndex + 1);
        return true;
      } else {
        while (randomOrder.length - 1 > articleIndex) {
          let newRandomOrder = randomOrder;
          newRandomOrder.pop();
          setRandomOrder(newRandomOrder);
        }
        let newRandomOrder = [...randomOrder, foundArticle];
        setArticle(foundArticle);
        setRandomOrder(newRandomOrder);
        setArticleIndex(articleIndex + 1);
        return true;
      }
    } else {
      return false;
    }
  };

  const handleNext = () => {
    changeArticle();
    changeBackground();
  };
  return (
    <>
      <SearchBar
        items={articles}
        updateItem={(foundArticle) => searchArticle(foundArticle)}
        changeBackground={changeBackground}
      />
      <section className="article_section">
        <h2>{article.chapter}</h2>
        <h3>{article.chapter_name}</h3>

        <h4>
          ARTICULO {article.number} - {article.title}
        </h4>
        <p>
          {article.body}
          {article.items.length > 0 && (
            <ol className="items_list">
              {article.items.map((item) => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          )}
          {article.paragraphs.length > 0 && (
            <ul className="paragraphs_list">
              {article.paragraphs.map((paragraph) => (
                <li key={paragraph.title}>
                  <p>{paragraph.title}</p>
                  <p>{paragraph.content}</p>
                </li>
              ))}
            </ul>
          )}
        </p>
        <div>
          <i
            onClick={handleBack}
            className="button-anterior bx bx-chevrons-left"
          ></i>
          <i
            onClick={handleNext}
            className="bx bx-chevrons-right next-button"
          ></i>
        </div>
      </section>
    </>
  );
};

export default Reglamento;
