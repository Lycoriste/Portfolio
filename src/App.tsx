import { useState } from 'react'
import './App.css'
import { Background } from './components/Canvas'
import { Header } from './components/Header';

function App() {
  const screenWidth = screen.width;
  const screenHeight = screen.height;

  const [backgroundPage, setBackgroundPage] = useState(0);

  return (
    <>
      {/* Separate background and main container of the site */}
      {/* Different z-index to layer main container on top of background */}
      <Background backgroundNumber={backgroundPage} />
      <div id="main" className='flex p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9 w-full h-full z-0 absolute'>
        <Header />
      </div>
    </>
  )
}

export default App
