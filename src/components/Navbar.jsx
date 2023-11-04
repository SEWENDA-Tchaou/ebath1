import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useCallback } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';
import fake_logo from '../assets/fake_logo.png'

const TOP_OFFSET = 66;

function Navbar() {
  const [showBackground, setShowBackgroung] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
            setShowBackgroung(true)
        } else {
            setShowBackgroung(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    const toggleMobileMenu = useCallback(() => {
      setShowMobileMenu((current) => !current)
  }, []);

  const Icon = showMobileMenu ? AiOutlineClose : AiOutlineMenu;

  return (
    <nav className="w-full fixed z-30">
      <div className={`${showBackground ?"bg-noir/80" : ""} flex justify-between items-center px-16 py-2 border-b-4 border-b-cafe/50 transition duration-500`}>
        <a href="/">
          <img src={fake_logo} alt="logo" className="w-[80px] h-[40px] sm:w-[100px] sm:h-[60px] hover:opacity-80" />
        </a>
        <div className="md:flex justify-evenly items-center w-3/4 hidden text-2xl text-blanc font-semibold">
            <Link to='/' className="cursor-pointer hover:opacity-80 px-2 py-6">Accueil</Link>
            <Link to='/apropos' className="cursor-pointer hover:opacity-80 px-2 py-6">A propos</Link>
            <Link to='/services' className="cursor-pointer hover:opacity-80 px-2 py-6">Services</Link>
            <Link to='/contact' className="cursor-pointer hover:opacity-80 px-2 py-6">Contacts</Link>
            <a href="/login" className="max-lg:hidden cursor-pointer hover:opacity-80 px-2 py-6">Connexion</a>
        </div>
        <div className="md:hidden flex flex-row items-center gap-2 ml-8 relative">
          <Icon
            size={30}
            className="text-blanc cursor-pointer hover:opacity-80"
            onClick={toggleMobileMenu}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
