import React, { Component } from 'react';
import Work from './Work';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      jobs: [
        {job: {
          jobTitle: 'Write your job title here.',
          companyName: 'Company Name',
          address: 'City, State',
          date: 'Start Date - End Date',
          jobSummary: 'In two lines, summarize your main responsibilities using past tense and provide information about the organization. Keep descriptions short but add details that show why you are a great candidate. Show your accomplishments by using numbers and percentages.'
        }},
        {job: {
          jobTitle: 'Write your job title here.',
          companyName: 'Company Name',
          address: 'City, State',
          date: 'Start Date - End Date',
          jobSummary: 'In two lines, summarize your main responsibilities using past tense and provide information about the organization. Keep descriptions short but add details that show why you are a great candidate. Show your accomplishments by using numbers and percentages.'
        }},
        {job: {
          jobTitle: 'Write your job title here.',
          companyName: 'Company Name',
          address: 'City, State',
          date: 'Start Date - End Date',
          jobSummary: 'In two lines, summarize your main responsibilities using past tense and provide information about the organization. Keep descriptions short but add details that show why you are a great candidate. Show your accomplishments by using numbers and percentages.'
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
    const { isEditing, jobs } = this.state;

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
                  <textarea
                    onChange={(e) => this.handleChange(e, index)}
                    value={singleJob.job.jobSummary}
                    name='jobSummary'
                    id={index}
                    rows='5'
                    cols='51'
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