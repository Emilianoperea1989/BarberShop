import React, { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import ReactModal from 'react-modal';
import CustomModal from '../customModal/CustomModal';
import './pricing.css';


const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-c0a27d9f-313f-40d3-8e25-fe481708656b");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        description: "Bananita contenta",
        price: 100,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleSelectEvent = event => {
    setSelectedDate(event.start);
    openModal(); // Abre el modal al hacer clic en un evento
  };

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
   
      <div id='Pricing' className={isVisible ? 'contenedorPrecio mostrar' : 'contenedorPrecio'}>
        <div className='contenedorTitulosPrecio'>
          <span>PRICING</span>
          <h2>PRICE & PLANS</h2>
        </div>
        <div className='contenedorPlanes'>
          <div>
            <img className='imgPrecio' src="https://res.cloudinary.com/duqilis2i/image/upload/v1697457156/barbershop/gulom-nazarov-DrG4V5skbMY-unsplash_jprpp7.jpg" alt="" />
            <ul className='listaTrabajos'>
              <li >
                <span><i className="fa fa-check itemPrice"></i>Hair Cut</span>
              </li>
              <li>
                <span> <i className="fa fa-check itemPrice"></i>Beard Trim</span>
              </li>
              <li>

                <span> <i className="fa fa-check itemPrice"></i>Hair Style</span>
              </li>
              <li>
                <span> <i className="fa fa-check itemPrice"></i>Clipper Cut</span>
              </li>
              <li>
                <span><i className="fa fa-check itemPrice"></i>Face Shave</span>
              </li>
              <li>
                <div className='contenedorbtnReserva'>
                  <div className='montoLista'>
                    <span>$</span>
                    <p>99</p>
                  </div>
                  <button className='botonReserva' onClick={openModal}>GET STARTED</button>
                  <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    Contenido del Modal
                    <button onClick={closeModal}>Cerrar</button>
                  </CustomModal>  
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img className='imgPrecio' src="https://res.cloudinary.com/duqilis2i/image/upload/v1697457156/barbershop/allef-vinicius-IvQeAVeJULw-unsplash_1_s6rpee.jpg" alt="" />
            <ul className='listaTrabajos'>
              <li >
                <span><i className="fa fa-check itemPrice"></i>Hair Cut</span>
              </li>
              <li>
                <span> <i className="fa fa-check itemPrice"></i>Beard Trim</span>
              </li>
              <li>

                <span> <i className="fa fa-check itemPrice"></i>Hair Style</span>
              </li>
              <li>
                <span> <i className="fa fa-check itemPrice"></i>Clipper Cut</span>
              </li>
              <li>
                <span><i className="fa fa-check itemPrice"></i>Face Shave</span>
              </li>
              <li>
                <div className='contenedorbtnReserva'>
                  <div className='montoLista'>
                    <span>$</span>
                    <p>149</p>
                  </div>
                  <button className='botonReserva' onClick={openModal}>GET STARTED</button>
                  <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    Contenido del Modal
                    <button onClick={closeModal}>Cerrar</button>
                  </CustomModal>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img className='imgPrecio' src="https://res.cloudinary.com/duqilis2i/image/upload/v1697457155/barbershop/hai-phung-m4Pd_e-4zKs-unsplash_j7mm9t.jpg" alt="" />
            <ul className='listaTrabajos'>
              <li >
                <span><i className="fa fa-check itemPrice"></i>Hair Cut</span>
              </li>
              <li>
                <span> <i className="fa fa-check itemPrice"></i>Beard Trim</span>
              </li>
              <li>

                <span> <i className="fa fa-check itemPrice"></i>Hair Style</span>
              </li>
              <li>
                <span> <i className="fa fa-check itemPrice"></i>Clipper Cut</span>
              </li>
              <li>
                <span><i className="fa fa-check itemPrice"></i>Face Shave</span>
              </li>
              <li>
                <div className='contenedorbtnReserva'>
                  <div className='montoLista'>
                    <span>$</span>
                    <p>199</p>
                  </div>
                  <button className='botonReserva' onClick={openModal}>GET STARTED</button>
                  <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    Contenido del Modal
                    <button onClick={closeModal}>Cerrar</button>
                  </CustomModal>
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