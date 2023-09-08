import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import './App.css';

const backgroundImageUrl = `${process.env.PUBLIC_URL}/assets/images/homepager.jpg`;

function App() {
  return (
    <div>
      <Header />
      <div id="homepage"><Homepage backgroundImageUrl={backgroundImageUrl}/></div>
      <div id="portfolio"><Portfolio /></div>

      <div id="about"><About backgroundImageUrl={backgroundImageUrl}/></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;