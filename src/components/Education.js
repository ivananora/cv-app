import React, { Component } from 'react';
import OneEducation from './OneEducation';

class Education extends Component {
  constructor() {
      super();

      this.state = {
        isEditing: false,
        educations: [
          {education: {
            degree: 'BS in Computer Science',
            universityName: 'University',
            date: '2012 - 2016'
          }},
          {education: {
            degree: 'BS in Computer Science',
            universityName: 'University Name',
            date: '2012 - 2016'
          }}
        ]
      }
  }

  handleChange = (e, index) => {
    const list = [...this.state.educations]
    list[index]['education'][e.target.name] = e.target.value;
    this.setState({
      educations: [...list],
    })
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: [...this.state.educations, {education: {
        degree: '',
        universityName: '',
        date: ''
      }}]
    })
  }

  deleteEducation = (index) => {
    const list = [...this.state.educations]
    list.splice(index, 1);
    this.setState({
      educations: [...list],
    })
  }
  
  editEducation = () => {
    this.setState({
      isEditing: true
    })
  }

  closeEducationEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isEditing: false
    })
  }

  render() {
    const { isEditing, educations } = this.state;

    return (
      <div className='section' onClick={this.editEducation}>
        <div className={ isEditing ? "edit" : "close" }>
          {educations.map((singleEducation, index) => {
            return(
              <form onSubmit={this.addEducation} key={index}>
                {index === 0 && <button onClick={this.closeEducationEdit}>Close</button>}
                <div>
                  <label htmlFor='degree'>Degree</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleEducation.education.degree}
                    name='degree'
                    id={index}
                  />
                  <label htmlFor='universityName'>University</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleEducation.education.universityName}
                    name='universityName'
                    id={index}
                  />
                  <label htmlFor='date'>Date</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleEducation.education.date}
                    name='date'
                    id={index}
                  />
                  {educations.length > 1 && <button type='button' onClick={() => this.deleteEducation(index)}>Remove</button>}
                  {educations.length - 1 === index && <button type='submit'>Add Education</button>}
                </div>
              </form>
            )
          })}
        </div>
        <h3>EDUCATION</h3>
        <OneEducation educations={educations} />
      </div>
    )
  }
}

export default Education