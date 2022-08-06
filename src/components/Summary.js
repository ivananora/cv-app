import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: 'Write a powerful performance summary here. Highlight your most valuable skills, qualifications, achievements, credentials, and other distinguishing information as it relates to and supports your current objective. Integrate keywords and qualifications aligned with the specific needs of the company.',
      isEditingSummary: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      summary: e.target.value
    })
  }

  editSummary = () => {
    this.setState({
      isEditingSummary: true
    })
  }

  closeSummaryEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isEditingSummary: false
    })
  }

  render() {
    const { summary, isEditingSummary } = this.state;

    return (
      <div className='section' onClick={this.editSummary}>
        <form className={ isEditingSummary ? "edit" : "close" }>
          <label htmlFor='summary'>Describe yourself.</label>
          <textarea
            value={summary} 
            onChange={this.handleChange}
            name='summary'
            id='input-summary'
            rows='5'
            cols='51'
          />
          <button onClick={this.closeSummaryEdit}>Close</button>
        </form>
        <h3>SUMMARY</h3>
        <p>{summary}</p>
      </div>
    )
  }
}

export default Summary;