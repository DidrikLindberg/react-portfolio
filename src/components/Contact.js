import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setMessageError(false);
  };

  const handleNameBlur = () => {
    if (!name) {
      setNameError(true);
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError(true);
    } else if (!validateEmail(email)) {
      setEmailError(true);
    }
  };

  const handleMessageBlur = () => {
    if (!message) {
      setMessageError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name, email, and message fields
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    } else if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }

    // Submit form if all fields are valid
    if (name && email && message) {
      // TODO: Perform form submission or other necessary actions
      console.log('Form submitted:', { name, email, message });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');

      // Display success toast
      setIsSubmitted(true);

      // Reset success toast after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
              onBlur={handleNameBlur}
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
              onBlur={handleEmailBlur}
              required
            />
            {emailError && <p className="error">Please use a valid email address</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleMessageBlur}
              required
            />
            {messageError && <p className="error">Message is required</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
        {isSubmitted && <div className="success-toast">Submitted!</div>}
      </div>
    </section>
  );
}

export default ContactForm;
