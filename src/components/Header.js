import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      fullName: 'FULL NAME',
      title: ' JOB TITLE',
      isEditingHeader: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editHeader = () => {
    this.setState({
      isEditingHeader: true
    })
  }

  closeHeaderEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isEditingHeader: false
    })
  }

  render() {
    const { fullName, title, isEditingHeader } = this.state;

    return (
      <div id="header-section" className='header-section' onClick={this.editHeader}>
        <form className={ isEditingHeader ? "edit" : "close" }>
          <label htmlFor='fullName'>Full Name</label>
          <input 
            value={fullName} 
            onChange={this.handleChange}
            name='fullName'
          />
          <label htmlFor='title'>Job Title</label>
          <input 
            value={title} 
            onChange={this.handleChange} 
            name='title'
          />
          <button onClick={this.closeHeaderEdit}>Close</button>
        </form>
        <h1 className='name'>{fullName}</h1>
        <h4 className='title'>{title}</h4>
      </div>
    )
  }
}

export default Header;