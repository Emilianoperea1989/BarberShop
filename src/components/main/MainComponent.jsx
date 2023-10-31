import React from 'react'
import mainComponent from './mainComponent.css'
const MainComponent = () => {
  return (
    <>
      <div id='Home' className='containerMain'>
        <div className='containerWelcome'>
          <div>
            <span className='welcome'>WELCOME TO BARBERSHOP</span>
            <h1 className='slogan'>WE WILL MAKE <span  className='spanTransp'>YOUR</span>
            <br />
            <span className='spanTransp'>STYLE</span> OF YOUR DREAMS</h1>
            <div>
              <p className='parrafoWelcome'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
              <p className='btnLernMoreAboutUs'>LEARN MORE ABOUT US</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MainComponent