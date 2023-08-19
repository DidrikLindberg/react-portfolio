import React from 'react';
// import './Homepage.css'; // Import your CSS file for styling

function Homepage() {
  return (
    <section className="homepage">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>Welcome to My Portfolio</h1>
            <p>Passionate about creating meaningful and beautiful web experiences.</p>
            <button className="btn btn-primary">View Portfolio</button>
          </div>
          <div className="col-lg-6">
            <img
            src={process.env.PUBLIC_URL + '/assets/images/man.png'}
            alt="Portfolio"
            className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
