import "./Footer.css"

const Footer = ({ isReglamento }) => {
  return (
    <footer>
      <a className="udec-link" href="http://www.ucundinamarca.edu.co/" target="blank">Universidad de Cundinamarca</a>
     
     {isReglamento ? (
        <a className="rule" target="_blan" href="https://www.ucundinamarca.edu.co/index.php/reglamento-estudiantil">Reglamento</a>
      ) : (
        <a className="rule" target="_blan" href="https://www.mineducacion.gov.co/portal/Educacion-superior/Pol%C3%ADtica-de-Gratuidad/409830:Politica-de-Gratuidad-en-la-Educacion-Superior#:~:text=La%20Pol%C3%ADtica%20de%20Gratuidad%20es,y%20que%20cumplen%20los%20requisitos">Gratuidad</a>
      )}
    </footer>
  )
}

export default Footer