import { useState } from 'react'
import './styling/App.css'
import { Background } from './components/Canvas'
import { Header } from './components/Header';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Cursor } from './components/Cursor';
import { CursorScript } from './utils/CursorScript';

function App() {
  const [currentSection, setCurrentSection] = useState('Home');

  CursorScript();

  return (
    <>
      <Cursor />
      <Background backgroundNumber={2} />
      <main id="main" className="flex p-[2vw] w-full h-full absolute z-50">
        <section id="content-frame" className="relative w-full h-full canvas-border">
          <Header />
          <section id="tabs" className="tabs-styling">
            <About current={currentSection} set={setCurrentSection} />
            <Contact />
            <Projects />
          </section>
        </section>
      </main>
    </>
  )
}

export default App
