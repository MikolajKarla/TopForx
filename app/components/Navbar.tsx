import ScrollToNavbar from './ScrollToNavbar';

const Navbar = () => {




  return (
    <div>
      <nav className=' w-full bg-primaryBlueBg grid grid-cols-6 py-4 px-16 text-xl text-GreenBg'>
        <h1 className=' font-semibold text-3xl col-span-2'>TopForX</h1>
        <ScrollToNavbar  name={"about"}/>
        <ScrollToNavbar name={"exchange"}/>
        <ScrollToNavbar name={"contant"}/>
        <ScrollToNavbar name={"newsletter"}/>
      </nav>
    </div>
  )
}

export default Navbar
