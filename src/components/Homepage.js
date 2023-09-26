import React from 'react';

function Homepage() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/homepager.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '75vh',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    pointerEvents: 'none',
  };

  const textStyle = {
    position: 'relative', // Ensure the text stays above the overlay
  };

  return (
    <section className="homepage" style={backgroundStyle}>
      <div className="overlay" style={overlayStyle}></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="homepage-content" style={textStyle}>
              <h1 className="homepage-title text-white display-4">Didrik Lindberg</h1>
              <p className="homepage-description text-white lead">
              Bringing ideas to life with clean and functional web development, creating seamless digital experiences.
              </p>
              <a className="btn btn-primary" href="#contact">Get in Touch</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="homepage-image">
              {/* You can add an image here if you want */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
