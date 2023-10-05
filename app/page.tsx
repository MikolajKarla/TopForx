import './globals.css'
import About from "./components/About"
import Exchange from "./components/Exchange"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Introduce from './components/Introduce'
import Opinions from './components/Opinions'
const page = () => {
  return (
    <>
    <Header/>
    <Introduce/>
      <About/>
      <Opinions/>
      <Exchange/>
      <Contact/>
      <Newsletter/>
    <Footer/>
    </>
  )
}

export default page