import React from 'react';
import Contact from './Contact.jsx';
import "./style.css";


class ContactsList extends React.Component {
    constructor() {
      super();
      this.state = {
        search: ''
      }
  }
 
  
   updateSearch = (event) => {
      this.setState({
        search: event.target.value
      })
    }
  
    
  
  handleClick = (e) => {
    e.preventDefault();
    this.props.printContacts(this.state)
  }
     
    render() {
      let searchContact = this.props.contacts.filter(
        (person) => {
          let fullName = person.firstName.toLowerCase() + person.lastName.toLowerCase()
          return fullName.indexOf(
            this.state.search.toLowerCase()) !== -1;
        }
      );
  
      return (
        <div className="search">
          <h3>SEARCH CONTACT:</h3>
               <div className="searchContact">
                  <input type="text" 
                         className="searchInput"
                         value={this.state.search}
                         onChange={this.updateSearch}
                         placeholder="Enter name or lastname"
                />
               </div>
          <ul className="list">
            {searchContact.map((person)=> {
              return <Contact contact={person} />
            })}
               </ul>
        </div>
  
      )
    }
  }

export default ContactsList;  