import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      fullName: 'John Doe',
      title: 'Web Developer',
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
      <div onClick={this.editHeader}>
        <form className={ isEditingHeader ? "edit" : "close" }>
          <input 
            value={fullName} 
            onChange={this.handleChange}
            name='fullName'
            placeholder='Full Name'
          />
          <input 
            value={title} 
            onChange={this.handleChange} 
            name='title'
            placeholder='Job Title'
          />
          <button onClick={this.closeHeaderEdit}>X</button>
        </form>
        <h1>{fullName}</h1>
        <h4>{title}</h4>
      </div>
    )
  }
}

export default Header;