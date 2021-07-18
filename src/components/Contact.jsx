import React from "react";
import App from "../App.jsx";
import "./style.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactList">
      <li>
        <p>
          Name: {this.props.contact.firstName} <br />
          Surname: {this.props.contact.lastName} <br />
          Birthday: {this.props.contact.birthday} <br />
          Phone: {this.props.contact.phone} <br />
          EMail: {this.props.contact.email}
        </p>
        {/* not working well this delete contact button! */}
        <button onClick={() => props.deleteContact(i)} className="delete_btn"> 
          Delete contact
        </button>
      </li>
      </div>
    );
  }
}
export default Contact;
