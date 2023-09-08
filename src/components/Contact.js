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
    <section id="contact" className="py-5" style={{ background: '#f9f9f9' }}>
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className={`form-control ${nameError ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  required
                />
                {nameError && <div className="invalid-feedback">Name is required</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">Please use a valid email address</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className={`form-control ${messageError ? 'is-invalid' : ''}`}
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  onBlur={handleMessageBlur}
                  required
                />
                {messageError && <div className="invalid-feedback">Message is required</div>}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            {isSubmitted && (
              <div className="alert alert-success mt-3" role="alert">
                Submitted!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
