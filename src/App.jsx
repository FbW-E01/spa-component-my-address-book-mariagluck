import React, { Component } from "react";
import "./components/style.css";
import ContactsList from "./components/ContactsList.jsx";
import AddContact from "./components/AddContact.jsx";

let contacts = [
  {
    id: 1,
    firstName: "Rogers",
    lastName: "Funk",
    birthday: "Jan 06 2081",
    phone: "811.827.8713",
    email: "Ashly68@yahoo.com",
  },
  {
    id: 2,
    firstName: "Kavon",
    lastName: "Frami",
    birthday: "Sep 11 2090",
    phone: "(211) 839-0998",
    email: "Kathryne89@yahoo.com",
  },
  {
    id: 3,
    firstName: "Albertha",
    lastName: "Homenick",
    birthday: "Dec 24 2087",
    phone: "643.407.0502 x83391",
    email: "Lance.Jaskolski46@gmail.com",
  },
  {
    id: 4,
    firstName: "Novella",
    lastName: "McClure",
    birthday: "Jul 19 2075",
    phone: "310.557.6673 x93405",
    email: "Jaida.Walsh@gmail.com",
  },
  {
    id: 5,
    firstName: "Baron",
    lastName: "Wilkinson",
    birthday: "Oct 03 2070",
    phone: "650.420.9557",
    email: "Letitia.Zboncak79@gmail.com",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      contacts: contacts,
    };
  }

  componentDidMount() {
    const str = localStorage.getItem("contact");
    const contact = JSON.parse(str);
    if (contact === null) {
      return;
    }
    this.setState({
      contacts: contact,
    });

    this.delay = setTimeout(() => {
      this.setState({ display: false });
    }, 3000);
  }

  addContact = (person) => {
    let contacts = this.state.contacts;

    contacts.push(person);

    this.setState({
      contacts: contacts,
    });
  };

  deleteContact = (i) => {
    let contacts = this.state.contacts;
    contacts.splice(i, 1);
    this.setState({ contacts: contacts });
  };

  render() {
    return (
      <div>
        {this.state.display === true ? (
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        ) : (
          <div className="container">
            <div className="title">
              <h1>ADDRESS BOOK</h1>
            </div>

            <AddContact
              contacts={this.state.contacts}
              addContact={this.addContact}
            />
            <ContactsList
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
