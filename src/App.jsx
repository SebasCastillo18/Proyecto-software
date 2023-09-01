import "./App.css"
import Footer from './components/Footer/Footer.jsx'
import Cite from './components/Cite/Cite.jsx'
import Header from './components/Header/Header.jsx'

const App = () => {
  return (
    <section className='App'>
        <Header/>
        <Cite/>
        <Footer/>
    </section>
  )
}
export default App