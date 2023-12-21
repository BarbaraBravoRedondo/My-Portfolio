import { useState } from 'react';
import '../styles/Contact.scss';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:barbarabravoredongo@gmail.com?subject=Message from ${email}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="contact__form font-light">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            title="Please enter a valid email address."
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;
