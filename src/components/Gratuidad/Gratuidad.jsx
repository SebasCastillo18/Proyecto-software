import { useState } from "react";
import { getRandomNumber } from "../../utils/getRandom";
import SearchBar from "../SearchBar/SearchBar";
import questions from "../../assets/gratuidad.json";
import "./Gratuidad.css";

const Gratuidad = ({ changeBackground }) => {
  const getRandomQuestion = () =>
    questions[getRandomNumber(questions.length - 1)];
  const [question, setQuestion] = useState(getRandomQuestion());
  const [randomOrder, setRandomOrder] = useState([question]);
  const [questionIndex, setQuestionIndex] = useState(0);
  // Cambio de articulo y guardado de orden aleatorio generado
  const changeQuestion = () => {
    // Si no hay mas articulo establecidos en la lista delante del actual
    if (questionIndex === randomOrder.length - 1) {
      let newQuestion = getRandomQuestion();
      let newRandomOrder = [...randomOrder, newQuestion];
      setQuestion(newQuestion);
      setRandomOrder(newRandomOrder);
      setQuestionIndex(questionIndex + 1);
    }
    // Si el usuario se regresó y está volviendo a ir adelante
    else {
      let newQuestion = randomOrder[questionIndex + 1];
      setQuestion(newQuestion);
      setQuestionIndex(questionIndex + 1);
    }
  };
  // Lógica para volver al articulo anterior
  const handleBack = () => {
    if (questionIndex > 0) {
      if (randomOrder.length > 1) {
        setQuestion(randomOrder[questionIndex - 1]);
        setQuestionIndex(questionIndex - 1);
        changeBackground();
      }
    }
  };
  //Lógica de búsqueda
  const searchQuestion = (foundQuestion) => {
    if (!(foundQuestion.number === question.number)) {
      if (questionIndex === randomOrder.length - 1) {
        let newRandomOrder = [...randomOrder, foundQuestion];
        setQuestion(foundQuestion);
        setRandomOrder(newRandomOrder);
        setQuestionIndex(questionIndex + 1);
        return true;
      } else {
        while (randomOrder.length - 1 > questionIndex) {
          let newRandomOrder = randomOrder;
          newRandomOrder.pop();
          setRandomOrder(newRandomOrder);
        }
        let newRandomOrder = [...randomOrder, foundQuestion];
        setQuestion(foundQuestion);
        setRandomOrder(newRandomOrder);
        setQuestionIndex(questionIndex + 1);
        return true;
      }
    } else {
      return false;
    }
  };

  const handleNext = () => {
    changeQuestion();
    changeBackground();
  };
  return (
    <>
      <SearchBar
        items={questions}
        updateItem={(foundQuestion) => searchQuestion(foundQuestion)}
        changeBackground={changeBackground}
      />
      <section className="question_section">
        <h2>{question.question}</h2>
        <p>{question.answer}</p>
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

export default Gratuidad;
