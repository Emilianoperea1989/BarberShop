

import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import MainComponent from './components/main/MainComponent'
import Pricing from './components/pricing/Pricing'
import app from './app.css'
import 'tailwindcss/tailwind.css'

function App() {

  return (
    <>
      <Header />
      <MainComponent />
      <About />
      <Gallery />
      <Pricing />
    </>
  )
}

export default App
