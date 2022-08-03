import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nesciunt culpa quia nam qui sed ratione, error sit, voluptatibus maxime fuga quisquam. Repellat, quos sed. Quis sint voluptatibus quaerat! Cum sunt facere perferendis, obcaecati sit fuga, eaque debitis voluptatum aperiam rem, voluptates quis laboriosam molestiae ab facilis reprehenderit. In obcaecati nam facilis optio quasi provident repudiandae quidem accusantium doloremque!',
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
      <div onClick={this.editSummary}>
        <form className={ isEditingSummary ? "edit-summary" : "close" }>
          <label htmlFor='summary'>Describe yourself.</label>
          <input 
            value={summary} 
            onChange={this.handleChange}
            name='summary'
            id='input-summary'
          />
          <button onClick={this.closeSummaryEdit}>Close</button>
        </form>
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>
    )
  }
}

export default Summary;