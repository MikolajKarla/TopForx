import ScrollToNavbar from './ScrollToNavbar';

const Navbar = () => {




  return (
      <nav className=' w-full bg-stone-100 grid grid-cols-6 py-4 px-16 text-xl text-stone-700 border-b-4 border-x-2  border-stone-600'>
        <h1 className=' font-semibold text-3xl col-span-2'>TopForX</h1>
        <ScrollToNavbar  name={"about"}/>
        <ScrollToNavbar name={"exchange"}/>
        <ScrollToNavbar name={"contant"}/>
        <ScrollToNavbar name={"newsletter"}/>
      </nav>
  )
}

export default Navbar
