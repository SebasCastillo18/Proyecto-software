import "./Header.css";

const Header = ({ selected, switchInfo }) => {
  let option = "";
  let title = "";
  if (selected) {
    option = "Gratuidad";
    title = "Reglamento Estudiantil";
  } else {
    option = "Reglamento";
    title = "Gratuidad";
  }
  return (
    <header className="container-header">
      <img
        className="img-logo"
        src="/images/ESCUDO-BLANCO-H.png"
        alt="escudo-blanco"
      />
      <h1 className="header-title">{title}</h1>
      <div className="header-buttons">
        <button className="switch-btn" onClick={() => switchInfo()}>
          {option}
        </button>
      </div>
    </header>
  );
};

export default Header;
