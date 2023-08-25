import React from 'react';
// import './Homepage.css'; // Import your CSS file for styling

function Homepage() {
    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <section className="homepage" style={backgroundStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>Hi, I'm Didrik. A Full Stack Developer.</h1>
            <p>Passionate about creating meaningful web experiences. Look at some of my projects below!</p>
            <button className="btn btn-primary">View Portfolio</button>
          </div>
          <div className="col-lg-6">
          <div className="image-container">
            <img
            src={process.env.PUBLIC_URL + '/assets/images/programming.png'}
            alt="Portfolio"
            className="img-fluid"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
