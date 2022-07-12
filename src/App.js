import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/AboutMe';
import WorkingTogether from './Components/WorkingTogether';
import CoachingOptions from './Components/CoachingOptions';
import ApplyForCoaching from './Components/ApplyForCoaching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sonnys website!</h1>
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
