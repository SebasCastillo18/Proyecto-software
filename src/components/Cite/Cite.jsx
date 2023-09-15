import "./Cite.css";

const Cite = ({ currentArticle }) => {
  return (
    <main>
      <section>
        <h2>{currentArticle.chapter}</h2>
        <h3>{currentArticle.chapter_name}</h3>

        <h4>
          ARTICULO {currentArticle.number} - {currentArticle.title}
        </h4>
        <p>
          {currentArticle.body}
          {currentArticle.items.length && (
            <ol>
              {currentArticle.items.map((item) => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          )}
          {currentArticle.paragraphs.length && (
            <ul>
              {currentArticle.paragraphs.map((paragraph) => (
                <li key={paragraph.title}>
                  <p>{paragraph.title}</p>
                  <p>{paragraph.content}</p>
                </li>
              ))}
            </ul>
          )}
        </p>
      </section>
      <button>
        <i className="bx bx-chevrons-right next-button"></i>
      </button>
    </main>
  );
};

export default Cite;
