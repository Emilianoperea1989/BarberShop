import React from 'react'
import footer from './footer.css'
const Footer = () => {
    return (
        <>
            <div className='contenedorFooter'>
                <div >
                    <h2 className='tituloFooter'>BARBERI</h2>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                    <div>
  
                    </div>
                </div>
                <div>
                    <h2 className='tituloFooter'>EXPLORE</h2>
                    <ul className='contenedorInfoFooter'>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>About</span></li>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Home</span></li>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Gallery</span></li>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Contact</span></li>
                    </ul>

                </div>
                <div>
                     <h2 className='tituloFooter'>INFO</h2>
                    <ul className='contenedorInfoFooter'>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Join us</span></li>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Make Appointment</span></li>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Privacy & Policy</span></li>
                        <li><span className="icon-text"> <i className="fa fa-chevron-circle-right"></i>Term & Conditions</span></li>
                    </ul></div>
                <div>
                     <h2 className='tituloFooter'>HAVE A QUESTIONS?</h2>
                    <ul className='contenedorInfoFooter'>
                        <li><span className="icon-text"><i className="fa fa-map fa-sm"></i>203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                        <li><span className="icon-text"><i className="fa fa-phone fa-sm"></i> +2 392 3929 210</span></li>
                        <li><span className="icon-text"><i className="fas fa-envelope fa-sm"></i>	info@yourdomain.com</span></li>

                    </ul>
                </div>
            </div>
            <div className='pieFooter'>
                <p>©2019 BARBERSHOP</p>
                <p>
                    developed by Emiliano Perea</p>
            </div>
        </>
    )
}

export default Footer