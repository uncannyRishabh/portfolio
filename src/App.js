import { useEffect, useState } from 'react';
import './App.css';
import { AboutMe } from './component/aboutMe';
import { HeroSection } from './component/heroSection';
import { NavBar } from './component/navbar';
import Project from './component/projects';

function App() {
  const [isDark, toggleDark] = useState(false);
  const toggle = () => (toggleDark(!isDark))

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
    const json = JSON.stringify(isDark);
    localStorage.setItem("site-dark-mode", json);
  })

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--bg',
      (isDark ? '#0D0E1B' : 'rgb(247,240,223)')
      )

      document.documentElement.style.setProperty(
        '--thumb_bg',
        (!isDark ? 'rgb(30,20,30)' : 'rgba(255, 255, 255, 0.35)')
      )

  },[isDark])

  return (
    <div className="App">
      <NavBar isDark={isDark} toggle={toggle}/>
      <HeroSection isDark={isDark}/>
      <AboutMe />
      <Project/>
    </div>
  );
}

export default App;