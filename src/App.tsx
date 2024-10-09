import { useEffect, useRef, useState } from 'react'
import './styling/App.css'
import { Background } from './components/Canvas'
import { Exit } from './components/Exit';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { CursorScript } from './utils/CursorScript';
import { BGSelector } from './components/BGSelector';

function App() {
  const [currentBackground, setBackground] = useState(2);
  const [currentSection, setCurrentSection] = useState('Home');

  CursorScript();

  return (
    <>
      <Background backgroundNumber={currentBackground} current={currentSection} />
      <BGSelector current={currentBackground} set={setBackground} />
      <Exit current={currentSection} set={setCurrentSection} />
      <main id="main" className="flex page-padding w-full h-full absolute z-50">
        <section id="content-frame" className="relative w-full h-full canvas-border">
          <section id="tabs" className={`tabs-styling ${currentSection == 'Home' ? 'w-[30%]' : 'w-0'}`}>
            <Header />
            <Home current={currentSection} set={setCurrentSection} />
            <About current={currentSection} set={setCurrentSection} />
            <Projects current={currentSection} set={setCurrentSection} />
            <Contact current={currentSection} set={setCurrentSection} />
          </section>
        </section>
      </main >
    </>
  )
}

export default App
