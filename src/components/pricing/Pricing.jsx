import React, { useState, useEffect } from 'react';
import './pricing.css';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const item = document.querySelector('.contenedorPrecio');
      const bounding = item.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={isVisible ? 'contenedorPrecio mostrar' : 'contenedorPrecio'}>
        <div className='contenedorTitulosPrecio'>
          <span>PRICING</span>
          <h2>PRICE & PLANS</h2>
        </div>
        <div className='contenedorPlanes'>
          <div>
            <img className='imgPrecio' src="https://res.cloudinary.com/duqilis2i/image/upload/v1697457156/barbershop/gulom-nazarov-DrG4V5skbMY-unsplash_jprpp7.jpg" alt="" />
            <ul className='listaTrabajos'>
              <li >
                <span></span>
                <span>Hair Cut</span>
              </li>
              <li>
                <span></span>
                <span>Beard Trim</span>
              </li>
              <li>
                <span></span>
                <span>Hair Style</span>
              </li>
              <li>
                <span></span>
                <span>Clipper Cut</span>
              </li>
              <li>
                <span></span>
                <span>Face Shave</span>
              </li>
              <li>
                <div className='contenedorbtnReserva'>
                <div className='montoLista'>
                    <span>$</span>
                    <p>99</p>
                  </div>
                  <button className='botonReserva'>GET STARTED</button>
                </div>
              </li>
            </ul>
          </div>
          <div>  <img className='imgPrecio' src="https://res.cloudinary.com/duqilis2i/image/upload/v1697457156/barbershop/allef-vinicius-IvQeAVeJULw-unsplash_1_s6rpee.jpg" alt="" />
            <ul className='listaTrabajos'>
              <li>
                <span></span>
                <span>Hair Cut</span>
              </li>
              <li>
                <span></span>
                <span>Beard Trim</span>
              </li>
              <li>
                <span></span>
                <span>Hair Style</span>
              </li>
              <li>
                <span></span>
                <span>Clipper Cut</span>
              </li>
              <li>
                <span></span>
                <span>Face Shave</span>
              </li>
              <li>
                <div className='contenedorbtnReserva'>
                <div className='montoLista'>
                    <span>$</span>
                    <p>139</p>
                  </div>
                  <button className='botonReserva'>GET STARTED</button>
                </div>
              </li>
            </ul>
          </div>
          <div>  <img className='imgPrecio' src="https://res.cloudinary.com/duqilis2i/image/upload/v1697457155/barbershop/hai-phung-m4Pd_e-4zKs-unsplash_j7mm9t.jpg" alt="" />
            <ul className='listaTrabajos'>
              <li>
                <span></span>
                <span>Hair Cut</span>
              </li>
              <li>
                <span></span>
                <span>Beard Trim</span>
              </li>
              <li>
                <span></span>
                <span>Hair Style</span>
              </li>
              <li>
                <span></span>
                <span>Clipper Cut</span>
              </li>
              <li>
                <span></span>
                <span>Face Shave</span>
              </li>
              <li>
                <div className='contenedorbtnReserva'>
                  <div className='montoLista'>
                    <span>$</span>
                    <p>199</p>
                  </div>

                  <button className='botonReserva'>GET STARTED</button>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Pricing