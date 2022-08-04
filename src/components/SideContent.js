import React, { Component } from 'react';
import Contact from './Contact';
import Skills from './Skills';

class SideContent extends Component {
  render() {
    return (
      <div>
          <Contact />
          <Skills />
      </div>
    )
  }
}

export default SideContent;