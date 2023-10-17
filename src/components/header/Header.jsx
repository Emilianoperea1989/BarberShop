import React, { useState, useEffect } from 'react';

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
      <div className={`contenedorHeader mt-4 flex justify-around w-full h-20 bg-black bg-opacity-75 fixed top-0 left-0 z-10 transition-all ${scrolled ? 'bg-white bg-opacity-90' : ''}`}>
        <img src="./src/assets/img/logo.png" alt="" />
        <div className='flex items-center justify-between font-barlow-condensed '>
          <ul className='flex justify-between  '>
            <li className='flex items-center list-none m-4'>
              <a className={`text-lg transition duration-300 hover:text-white`}
                style={{ color: scrolled ? '#bf925b' : '#6b7280' }}
                href="">HOME</a>
            </li>
            <li className='flex items-center list-none m-4'>
              <a className={`text-lg transition duration-300 hover:text-white`}
                style={{ color: scrolled ? '#bf925b' : '#6b7280' }}
                href="">ABOUT</a>
            </li>
            <li className='flex items-center list-none m-4'>
              <a className={`text-lg transition duration-300 hover:text-white`}
                style={{ color: scrolled ? '#bf925b' : '#6b7280' }}
                href="">GALLERY</a>
            </li>
            <li className='flex items-center list-none m-4'>
              <a className={`text-lg transition duration-300 hover:text-white`}
                style={{ color: scrolled ? '#bf925b' : '#6b7280' }}
                href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;
