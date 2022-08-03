import React, { Component } from 'react';
import Summary from './Summary';
import Experience from './Experience';

class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Summary />
        <Experience />
      </div>
    )
  }
}

export default MainContent;