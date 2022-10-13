import '../src/Components/Mobile.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
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
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/aboutSanam" element={<AboutMe />} />
          <Route exact path="/workingTogether" element={<WorkingTogether />} />
          <Route exact path="/coachingOptions" element={<CoachingOptions />} />
          <Route exact path="/applyforcoaching" element={<ApplyForCoaching />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
