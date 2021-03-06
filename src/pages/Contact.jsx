import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      console.log("form must be filled out");
    } else {
      emailjs
        .sendForm(
          "service_cvk3fcr",
          "template_ltghbve",
          form.current,
          "user_AcCQo8isxokY8Pb3autGq"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
      showModal();
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="heading">Lets connect!</h1>
      <div className="form-wrap">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={handleNameChange}
            required="true"
          />
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleEmailChange}
            required="true"
          />
          <label className="form-label">Message</label>
          <textarea
            className="message-input"
            name="message"
            placeholder="leave a message!"
            value={message}
            onChange={handleMessageChange}
            required="true"
          />
          <button
            className="form-button"
            type="submit"
            value="Send"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Send Message
          </button>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Thanks for your message, i will get back to you as soon as
              possible!
            </Modal.Body>
            <Modal.Footer>
              <button onClick={hideModal}>Close</button>
            </Modal.Footer>
          </Modal>
        </form>
        <div className="img-wrap">
          <img className="email-img" src="./email.png" alt="email image" />
        </div>
      </div>
    </div>
  );
};
