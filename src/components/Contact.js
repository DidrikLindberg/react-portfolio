import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name and email fields
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }

    // Submit form if all fields are valid
    if (name && email) {
      // TODO: Perform form submission or other necessary actions
      console.log('Form submitted:', { name, email, message });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="sub-title">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
            {nameError && <p className="error">Name is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error">Invalid email address</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
