var resumeLink =
  "https://drive.google.com/file/d/18GNSma7e6lk9Gfcx39teWedPKg0cYkq-/view?usp=sharing";

var linkedInLink = "https://www.linkedin.com/in/pranav-vijay-b01b43223";

var githubLink = "https://www.github.com/VijayP30";

export interface HeaderProps {
  text: string;
  delay: number;
  currentText: string;
  setCurrentText: React.Dispatch<React.SetStateAction<string>>;
  currentTextIndex: number;
  setCurrentTextIndex: React.Dispatch<React.SetStateAction<number>>;
  showCursor: boolean;
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
  typingStarted: boolean;
  setTypingStarted: React.Dispatch<React.SetStateAction<boolean>>;
  typingFinished: boolean;
  setTypingFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

export { resumeLink, linkedInLink, githubLink };
