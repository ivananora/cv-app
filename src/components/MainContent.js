import React, { Component } from 'react';
import Summary from './Summary';
import Experience from './Experience';

class MainContent extends Component {
  render() {
    return (
      <div id='main-content-section'>
        <Summary />
        <Experience />
      </div>
    )
  }
}

export default MainContent;