import React, { Component } from 'react';
import Summary from './Summary';
import Experience from './Experience';

class MainContent extends Component {
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