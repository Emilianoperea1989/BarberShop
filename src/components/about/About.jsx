import React from 'react'
import about from './about.css'
const About = () => {
  return (
    <>

      <div id='About' className='About'>
        <img  className="animate-image" src="https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&     ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyc2hvcHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className='aboutTextoConainer animate-text'>   
          <span className='aboutTitle'>ABOUT BARBER</span>
          <h2 className='titleInAboutSection'>A SMOOTH BARBER EXPERIENCE IN YOUR TOWN</h2>
          <p className='parrafoAbout'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>


    </>
  )
}

export default About