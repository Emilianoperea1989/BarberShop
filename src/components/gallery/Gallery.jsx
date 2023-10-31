

import React, { useState, useEffect } from 'react';
import gallery from './gallery.css'

const Gallery = () => {

      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          const imagenes = document.querySelectorAll('.galeria > img');
          imagenes.forEach((imagen) => {
            const bounding = imagen.getBoundingClientRect();
            if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
              setIsVisible(true);
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



    return (
        <>
          <div id='Gallery' className='contenedorGalleria'>
          <div className='contenedorGaleriaTitulo'>
                <p>
                    GALLERY
                </p>
                <h2 className='galeriaTitulo'>
                    PHOTOS OF OUR EVENTS
                </h2>
            </div>
            <div className='galeria'>
                <img className={isVisible ? 'mostrar' : ''} src=" https://res.cloudinary.com/duqilis2i/image/upload/v1697122078/barbershop/agustin-fernandez-1Pmp9uxK8X8-unsplash_1_jeolga.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122078/barbershop/salah-regouane-cByMWSOSYJg-unsplash_omc2mc.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122077/barbershop/hair-spies-lmZ_JVfbmY4-unsplash_gc5niq.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122078/barbershop/michael-demoya-Q82AM6BWBPM-unsplash_vvfnml.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122077/barbershop/jose-pinto-yG0Z9OwXWks-unsplash_ah74l9.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122077/barbershop/fabio-alves-DYetcnz0jRY-unsplash_eqf7pb.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122077/barbershop/hair-spies-ClilMdu189E-unsplash_vwbnja.jpg" alt="" />
                <img  className={isVisible ? 'mostrar' : ''}src="https://res.cloudinary.com/duqilis2i/image/upload/v1697122076/barbershop/dwi-rina-1mCES8oURBk-unsplash_homeef.jpg" alt="" />
            </div>

          </div>
            

        </>
    )
}

export default Gallery