import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import { NAME, TYPE_DELAY } from './constants';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingFinished, setTypingFinished] = useState(false);
  
  return (
    <div className="App">
      <div className="body">
        <Header
          text={NAME}
          delay={TYPE_DELAY} 
          currentText={currentText}
          setCurrentText={setCurrentText}
          currentTextIndex={currentTextIndex}
          setCurrentTextIndex={setCurrentTextIndex}
          showCursor={showCursor}
          setShowCursor={setShowCursor}
          typingStarted={typingStarted}
          setTypingStarted={setTypingStarted}
          typingFinished={typingFinished}
          setTypingFinished={setTypingFinished}
        />
        <div className="tooltip-container">
          <FontAwesomeIcon icon={faRunning} className="running-icon" />
          <span className="tooltip-text">Running Data via Strava - Coming Soon!</span>
        </div>
        <Experience visible={typingFinished} />
        <Projects visible={typingFinished} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
