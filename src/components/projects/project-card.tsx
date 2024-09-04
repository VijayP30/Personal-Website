import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import './styles.css';

interface ProjectCardProps {
  name: string;
  link: string;
  summary: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, link, summary }) => {
  return (
    <div className="project-card">
      <h2 className="project-name">
        {name}
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          <AiFillGithub className="github-icon" />
        </a>
      </h2>
      <ul className="project-summary">
        {summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;