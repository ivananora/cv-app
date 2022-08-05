import React, { Component } from 'react';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';

class SideContent extends Component {
  render() {
    return (
      <div id='side-content-section'>
          <Contact />
          <Education />
          <Skills />
      </div>
    )
  }
}

export default SideContent;