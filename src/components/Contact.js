import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
      super(props);

      this.state = {
        phoneNumber: '123-456-7890',
        emailAddress: 'youremail@gmail.com',
        address: 'City, State',
        linkedIn: 'linkedin.com/username',
        isEditing: false
      }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editContact = () => {
    this.setState({
      isEditing: true
    })
  }

  closeContactEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isEditing: false
    })
  }

  render() {
    const { phoneNumber, emailAddress, address, linkedIn, isEditing } = this.state;

    return (
      <div className='section' onClick={this.editContact}>
        <form className={ isEditing ? "edit" : "close" }>
          <label htmlFor='phoneNumber'>Number</label>
          <input
            value={phoneNumber}
            onChange={this.handleChange}
            name='phoneNumber'
          />
          <label htmlFor='emailAddress'>Email</label>
          <input
            value={emailAddress}
            onChange={this.handleChange}
            name='emailAddress'
          />
          <label htmlFor='address'>Address</label>
          <input
            value={address}
            onChange={this.handleChange}
            name='address'
          />
          <label htmlFor='linkedIn'>LinkedIn</label>
          <input
            value={linkedIn}
            onChange={this.handleChange}
            name='linkedIn'
          />
          <button onClick={this.closeContactEdit}>Close</button>
        </form>
        <h3>CONTACT</h3>
        <p className='contact-details'>{phoneNumber}</p>
        <p className='contact-details'>{emailAddress}</p>
        <p className='contact-details'>{address}</p>
        <p className='contact-details'>{linkedIn}</p>
      </div>
    )
  }
}

export default Contact;