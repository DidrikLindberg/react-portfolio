import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div id="homepage"><Homepage /></div>
      <div id="about"><About /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
      <div id="resume"><Resume /></div>
      <Footer />
    </div>
  );
}

export default App;