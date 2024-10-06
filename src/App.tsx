import { useState } from 'react'
import './styling/App.css'
import { Background } from './components/Canvas'
import { Header } from './components/Header';

function App() {
  const screenWidth = screen.width;
  const screenHeight = screen.height;

  const [backgroundPage, setBackgroundPage] = useState(1);
  const pageNumbers = [1, 2];

  return (
    <>
      <Background backgroundNumber={2} />
      <main id="main" className='flex p-[2vw] w-full h-full absolute z-50'>
        <section id="content-frame" className='w-full h-full canvas-border'>
          <Header />
          <section id="tabs">

          </section>
        </section>
      </main>
    </>
  )
}

export default App
