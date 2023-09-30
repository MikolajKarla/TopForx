import './globals.css'
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
    <main className='bg- text-xl'>
      <section id='introduce' className='grid grid-cols-12 justify-center bg-secondaryBlueBg'>
      <div className="col-span-6">
ddd
      </div>
      <div className="col-span-3 text-end" >

      Welcome to TopForX, your premier destination for chart analysis and comprehensive Forex information.
      If you're looking to navigate the dynamic world of foreign exchange trading with confidence and precision,
       you've come to the right place.
      </div>
      </section>
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