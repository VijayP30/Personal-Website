import React, { useEffect } from "react";
import { HeaderProps } from "./constants";

const Writer: React.FC<HeaderProps> = ({
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
  setTypingFinished,
}) => {
  // Initial blinking before typing starts
  useEffect(() => {
    const blinkBeforeTyping = setTimeout(() => {
      setTypingStarted(true);
    }, 2000); // Blink for 3 seconds before typing starts

    return () => clearTimeout(blinkBeforeTyping);
  }, [setTypingStarted]);

  // Typing effect
  useEffect(() => {
    if (typingStarted && currentTextIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentTextIndex]);
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(typingTimeout);
    } else if (currentTextIndex >= text.length) {
      setShowCursor(false); // Stop cursor blinking after typing is complete
      setTypingFinished(true);
    }
  }, [
    typingStarted,
    currentTextIndex,
    delay,
    text,
    setCurrentText,
    setCurrentTextIndex,
    setShowCursor,
    setTypingFinished,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    if (currentTextIndex < text.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 300); // Blink every 500ms during typing

      return () => clearInterval(cursorInterval);
    }
  }, [typingStarted, currentTextIndex, text.length, setShowCursor]);

  return (
    <div>
      {currentText}
      <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
    </div>
  );
};

export default Writer;
