import React from 'react';
import './styles.css';

interface ExperienceCardProps {
  companyLogo: string;
  roleName: string;
  companyName: string;
  link: string;
  dates: string;
  summary: string[];
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ companyLogo, roleName, companyName, link, dates, summary, skills }) => {
  return (
    <div className="experience-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={companyLogo} alt={`${companyName} logo`} className="company-logo" />
      </a>
      <div className="experience-details">
        <h2>{roleName}</h2>
        <h3>{companyName}</h3>
        <p>{dates}</p>
      </div>
      <ul className="experience-summary">
        {summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="experience-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-bubble">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;