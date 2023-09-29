import About from "./components/About"
import Exchange from "./components/Exchange"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
const page = () => {
  return (
    <>
    <Header/>
    <main>
      <About/>
      <Exchange/>
      <Contact/>
      <Newsletter/>
    </main>
    <Footer/>
    </>
  )
}

export default page