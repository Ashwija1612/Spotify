import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/contact';
import Artists from './components/pages/artists';
import Songs from './components/pages/songs';
import Form from './components/pages/form';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
      
            <Route path="/about" element={<About />}>
            </Route>

            <Route path="/artists" element={<Artists />}>
            </Route>

            <Route path="/songs" element={<Songs />}>
            </Route>

            <Route path="/contact" element={<Contact />}>
            </Route>

            <Route path="/forms" element={<Form />}>
            </Route>

          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
