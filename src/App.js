import { useEffect, useState } from 'react';
import { AboutMe } from './component/aboutMe';
import { HeroSection } from './component/heroSection';
import { NavBar } from './component/navbar';
import { Project } from './component/projects';
import { Experience } from './component/experience';
import { Contact } from './component/contact';
import { Footer } from './component/footer';
import './App.css';

function App() {
  const [isdark, toggleDark] = useState(false);
  const toggle = () => (toggleDark(!isdark))

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);

    if (currentMode) {
      toggleDark(true);
    } else {
      toggleDark(false);
    }
  },[])

  useEffect(() => {
    const json = JSON.stringify(isdark);
    localStorage.setItem("site-dark-mode", json);
  })

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--bg',
      (isdark ? '#0D0E1B' : 'rgb(247,240,223)')
      )

      document.documentElement.style.setProperty(
        '--thumb_bg',
        (!isdark ? 'rgb(30,20,30)' : 'rgba(255, 255, 255, 0.35)')
      )

  },[isdark])

  return (
    <div className="App">
      <NavBar isdark={+isdark} toggle={toggle}/>
      <HeroSection isdark={+isdark} toggle={toggle}/>
      <AboutMe isdark={+isdark}/>
      <Project isdark={+isdark}/>
      <Experience isdark={+isdark}/>
      <Contact isdark={+isdark} />
      <Footer isdark={+isdark}/>
    </div>
  );
}

export default App;