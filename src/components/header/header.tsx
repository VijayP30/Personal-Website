import React from 'react';
import './styles.css';
import Writer from './writer';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { githubLink, HeaderProps, linkedInLink, resumeLink } from './constants';


const Header: React.FC<HeaderProps> = ({
  text,
  delay,
  currentText,
  setCurrentText,
  currentTextIndex,
  setCurrentTextIndex,
  showCursor,
  setShowCursor,
  typingStarted,
  setTypingStarted,
  typingFinished,
  setTypingFinished
}) => {
  return (
    <div className="header">
        <Writer
            text={text}
            delay={delay} 
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
        <div className={`summary ${typingFinished ? 'visible' : ''}`}>
          <div className="summary-child bio">
            Computer Engineering Student at the University of California, San Diego
          </div>
          <a href={resumeLink} target="_blank"  rel="noreferrer">
            <div className="summary-child resume">
                Resume
            </div>
          </a>
          <div className="social-links">
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub></AiFillGithub>
              </a>
          </div>
        </div>
    </div>
  );
}

export default Header;