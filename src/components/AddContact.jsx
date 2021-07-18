import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthday: "",
      phone: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
  };

  handleChange = (data) => {
    let state = this.state;
    let name = data.target.name;
    state[name] = data.target.value;
    this.setState(state);
  };

  render() {
    return (
      <div className="addContact">
        <form className="addForm" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label>Name: </label>
            <input
              type="text"
              name="firstName"
              value={this.props.firstname}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label>Lastname: </label>
            <input
              type="text"
              name="lastName"
              value={this.props.lastname}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label>Birthday: </label>
            <input
              type="text"
              name="birthday"
              value={this.props.birthday}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label>Phone: </label>
            <input
              type="text"
              name="phone"
              value={this.props.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={this.props.email}
              onChange={this.handleChange}
            />
          </div>
          <button className="add_btn" type="submit">Add new contact</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
