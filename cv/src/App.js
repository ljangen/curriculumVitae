import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom"
import HomePage from './routes/HomePage';
import AboutMe from './routes/AboutMe';
import MyProjects from './routes/MyProjects';
import ContactMe from './routes/ContactMe';

function App() {
  return (
    <div className="App">
      < NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/AboutMe" element={<AboutMe />}/>
        <Route path="/MyProjects" element={<MyProjects />}/>
        <Route path="/ContactMe" element={<ContactMe />}/>

      </Routes>
    
    </div>

  );
}

export default App;
