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
      showModal();
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
      <div class="row">
        <div class="content col-12">
          <h1 className="heading">Want to get in-touch?</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            molestiae excepturi incidunt, laborum provident quasi aliquam
            repellat perspiciatis, totam iusto dicta! Saepe suscipit ipsum
            explicabo vel aut possimus quod incidunt.
          </p>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
            />
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label className="form-label">Message</label>
            <textarea
              className="message-input"
              name="message"
              placeholder="leave a message!"
              value={message}
              onChange={handleMessageChange}
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
                <Modal.Title>Error!</Modal.Title>
              </Modal.Header>
              <Modal.Body>Error: fill all fields</Modal.Body>
              <Modal.Footer>
                <button onClick={hideModal}>Hide</button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};
