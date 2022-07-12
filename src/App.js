import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/AboutMe';
import WorkingTogether from './Components/WorkingTogether';
import CoachingOptions from './Components/CoachingOptions';
import ApplyForCoaching from './Components/ApplyForCoaching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <AboutMe />
        <WorkingTogether />
        <CoachingOptions />
        <ApplyForCoaching />
      </header>
    </div>
  );
}

export default App;
