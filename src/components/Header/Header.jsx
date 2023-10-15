import "./Header.css";

const Header = ({selected, switchInfo}) => {
  let option = "";
  let title = "";
  if(selected){
    option = "Gratuidad";
    title = "Reglamento Estudiantil"
  }
  else{
    option = "Reglamento";
    title = "Gratuidad"
  }
  return (
    <header className="container-header">
      <button className="switch-btn" onClick={() => switchInfo()}>{option}</button>
      <img className="img-logo" src="/images/ESCUDO-BLANCO-H.png" alt="" />
      <h1>{title}</h1>
      <img className="img-logo" src="/images/ESCUDO-BLANCO-H.png" alt="" />
      <i className="bx bxs-moon dark-mode"></i>
    </header>
  );
};

export default Header;
