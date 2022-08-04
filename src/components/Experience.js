import React, { Component } from 'react';
import Work from './Work';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      jobs: [
        {job: {
          jobTitle: 'Full Stack Developer',
          companyName: 'Company 1',
          address: 'Makati, National Capital Region',
          date: 'January 2020 - January 2022',
          jobSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti mollitia debitis labore nam voluptatem in eius voluptatum obcaecati pariatur quia magnam delectus fugit, molestias expedita, libero quas maxime saepe.'
        }},
        {job: {
          jobTitle: 'Front End Developer',
          companyName: 'Company 2',
          address: 'Pasay, National Capital Region',
          date: 'January 2018 - January 2020',
          jobSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti mollitia debitis labore nam voluptatem in eius voluptatum obcaecati pariatur quia magnam delectus fugit, molestias expedita, libero quas maxime saepe.'
        }},
        {job: {
          jobTitle: 'Software Engineer Intern',
          companyName: 'Company 3',
          address: 'Muntinlupa, National Capital Region',
          date: 'January 2016 - January 2018',
          jobSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti mollitia debitis labore nam voluptatem in eius voluptatum obcaecati pariatur quia magnam delectus fugit, molestias expedita, libero quas maxime saepe.'
        }},
      ]
    }
  }

  handleChange = (e, index) => {
    const list = [...this.state.jobs]
    list[index]['job'][e.target.name] = e.target.value;
    this.setState({
      jobs: [...list],
    })
  }

  addWork = (e) => {
    e.preventDefault();
    this.setState({
      jobs: [...this.state.jobs, {job: {
        jobTitle: '',
        companyName: '',
        address: '',
        date: '',
        jobSummary: ''
      }}]
    })
  }

  deleteWork = (index) => {
    const list = [...this.state.jobs]
    list.splice(index, 1);
    this.setState({
      jobs: [...list],
    })
  }
  
  editExperience = () => {
    this.setState({
      isEditing: true
    })
  }

  closeExperienceEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isEditing: false
    })
  }

  render() {
    const { isEditing, jobs, job } = this.state;

    return (
      <div className='section' onClick={this.editExperience}>
        <div className={isEditing ? "edit" : "close"}>
          {jobs.map((singleJob, index) => {
            return(
              <form onSubmit={this.addWork} key={index}>
                {index === 0 && <button onClick={this.closeExperienceEdit}>Close</button>}
                <div className='form-column-grid'>
                  <label htmlFor='jobTitle'>Job Title</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleJob.job.jobTitle}
                    name='jobTitle'
                    id={index}
                  />
                  <label htmlFor='companyName'>Company Name</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleJob.job.companyName}
                    name='companyName'
                    id={index}
                  />
                  <label htmlFor='address'>Address</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleJob.job.address}
                    name='address'
                    id={index}
                  />
                  <label htmlFor='date'>Start and End Date</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleJob.job.date}
                    name='date'
                    id={index}
                  />
                  <label htmlFor='jobSummary'>Summary</label>
                  <input
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleJob.job.jobSummary}
                    name='jobSummary'
                    id={index}
                  />
                  {jobs.length > 1 && <button type='button' onClick={() => this.deleteWork(index)}>Remove</button>}
                  {jobs.length - 1 === index && <button type='submit'>Add Work</button>}
                </div>
              </form>
            )
          })}
        </div>
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <Work displayJobs={jobs} />
      </div>
    )
  }
}

export default Experience;