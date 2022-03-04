import { useEffect, useState } from 'react';
import './App.css';
import { AboutMe } from './component/aboutMe';
import { HeroSection } from './component/heroSection';
import { NavBar } from './component/navbar';

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

  return (
    <div className="App">
      <NavBar isDark={isDark} toggle={toggle}/>
      <HeroSection isDark={isDark}/>
      <AboutMe />
    </div>
  );
}

export default App;