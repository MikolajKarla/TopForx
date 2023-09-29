import Link from 'next/link';
import ScrollToNavbar from './ScrollToNavbar';

const Navbar = () => {




  return (
    <div>
      <nav className=' w-full bg-primaryBlueBg'>
        <h1>TopForX</h1>
        <ScrollToNavbar name={"about"}/>
        <ScrollToNavbar name={"exchange"}/>
        <ScrollToNavbar name={"contant"}/>
        <ScrollToNavbar name={"newsletter"}/>
      </nav>
    </div>
  )
}

export default Navbar
