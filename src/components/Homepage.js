import React from 'react';

function Homepage() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/homepager.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
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
              <h1 className="homepage-title text-white display-4">Full Stack Developer</h1>
              <p className="homepage-description text-white lead">
                I am a Full Stack Developer with a passion for crafting user-friendly digital experiences.
              </p>
              <button className="btn btn-primary">View Projects</button>
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
