import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('About');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    </div>
  );
}

export default App;
