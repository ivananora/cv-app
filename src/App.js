import React from 'react';
import './styles/Style.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideContent from './components/SideContent';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainContent />
      <SideContent />
    </div>
  )
}

export default App;