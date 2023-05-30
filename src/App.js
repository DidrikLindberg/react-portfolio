import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Footer from './Footer';

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
      default:
        return null;
    }
  };

  return (
    <div>
      <Header setActiveComponent={setActiveComponent} />
      {renderComponent()}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
