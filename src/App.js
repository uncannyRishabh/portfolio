import './App.css';
import { AboutMe } from './component/aboutMe';
import { HeroSection } from './component/heroSection';
import { NavBar } from './component/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <AboutMe />
    </div>
  );
}

export default App;
