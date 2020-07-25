import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      disabled: true,
      emailSent: false,
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <Form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="InputName">Name</label>
              <input
                name="name"
                type="text"
                id="contactNameInput"
                className="form-control"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail">Email</label>
              <input
                name="email"
                type="email"
                id="contactEmailInput"
                className="form-control"
                placeholder="email@email.com"
                value={this.state.email}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="form-group input-group-lg">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                as="textarea"
                rows="10"
                className="form-control"
                id="contactFormMessage"
                value={this.state.message}
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div>
              <button
                typ="submit"
                href="mailto:darnell.nathaniel95@gmail.com"
                id="contactSubmit"
                className="btn btn-info"
              >
                Send Email
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;