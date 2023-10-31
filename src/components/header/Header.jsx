import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import header from './header.css'


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <div className={`contenedorHeader mt-2 flex justify-around w-full h-12 bg-black bg-opacity-75 fixed top-0 left-0 z-10 transition-all ${scrolled ? 'bg-gray-400 bg-opacity-90' : ''}`}>
        <img src="./src/assets/img/logo.png" alt="" />
        <div className='flex items-center justify-between font-barlow-condensed '>
          <ul className='flex justify-between  '>
            <li className='flex items-center list-none m-4'>
              <Link className={`my-link text-lg transition duration-300`} to="Home" smooth={true} duration={500}>HOME</Link>
            </li>
            <li className='flex items-center list-none m-4'>
              <Link className={`my-link text-lg transition duration-300`} to="About" smooth={true} duration={500} offset={-50}>ABOUT</Link>
            </li>
            <li className='flex items-center list-none m-4'>
              <Link className={`my-link text-lg transition duration-300`} to="Gallery" smooth={true} duration={500} offset={-100}>GALLERY</Link>
            </li>
            <li className='flex items-center list-none m-4'>
              <Link className={`my-link text-lg transition duration-300`} to="Pricing" smooth={true} duration={500} offset={-100}>PRICING</Link>
            </li>
            <li className='flex items-center list-none m-4'>
              <Link className={`my-link text-lg transition duration-300`} to="Footer" smooth={true} duration={500}>CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;
