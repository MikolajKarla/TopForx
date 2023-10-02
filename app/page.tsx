import './globals.css'
import About from "./components/About"
import Exchange from "./components/Exchange"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Introduce from './components/Introduce'
const page = () => {
  return (
    <>
    <Header/>
    <Introduce/>
      <About/>
      <Exchange/>
      <Contact/>
      <Newsletter/>
    <Footer/>
    </>
  )
}

export default page