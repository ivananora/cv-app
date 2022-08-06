import React, { Component } from 'react';
import './styles/Style.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';
import ReactToPrint from 'react-to-print';


class App extends Component {
  render() {
    return(
      <div className='app-container'>
        <ReactToPrint
          id='print-btn'
          trigger={() => {
            return <button>Print</button>
          }}
          content={() => this.componentRef}
        />
        <div className='App' ref={el=>(this.componentRef = el)}>
          <Header />
          <MainContent />
          <SideContent />
        </div>
      </div>
    )
  }
}

export default App;