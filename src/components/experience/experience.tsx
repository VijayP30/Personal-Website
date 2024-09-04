import React from 'react';
import ExperienceCard from './experience-card';
import mongodb from '../../logos/mongodb.png';
import amd from '../../logos/amd.png';
import hp from '../../logos/hp.png';

const Experience: React.FC<{ visible: boolean }> = ({ visible }) => {
    return (
        <div className={`experience-container ${visible ? 'visible' : ''}`}>
            <h1 className='experience-header'>Experience</h1>
            <div className='experience-card-container'>
                <ExperienceCard 
                    companyLogo={mongodb} 
                    roleName={'Software Engineer Intern'} 
                    companyName={'MongoDB'}
                    link={'https://www.mongodb.com/'}
                    dates={'June 2024 - August 2024'} 
                    summary={[
                        'Doubled language support on MongoDB Atlas function triggers for over 40,000 users using Go and TypeScript',
                        'Engineered a transpiler using Go, JavaScript, and Babel to convert TypeScript into executable JavaScript',
                        'Leveraged the custom transpiler and developed a linting interface to build an in-house TypeScript code editor',
                        'Streamlined the MongoDB triggers UI using React, boosting user efficiency and driving higher adoption rates',
                        'Implemented state management using Redux across MongoDB App and Data Services improving performance',
                    ]} 
                />
                <ExperienceCard 
                    companyLogo={amd} 
                    roleName={'Software Engineer Intern'} 
                    companyName={'Advanced Micro Devices, Inc.'} 
                    link={'https://www.amd.com/en'}
                    dates={'September 2023 - May 2024'} 
                    summary={[
                        'Architected silicon testing APIs for the next generation of AMD processors using Java, Python, Artifactory',
                        'Migrated experimental data pipelines to fit new product architecture using Java, doubling data throughput',
                        'Automated the scheduling of overnight electronics tests using Spring, improving resource utilization by 900%',
                        'Owned and maintained a test program validation module that reduced test time by up to 20% in production',

                    ]} 
                />
                <ExperienceCard 
                    companyLogo={hp} 
                    roleName={'Software Engineer Intern'} 
                    companyName={'Advanced Micro Devices, Inc.'} 
                    link={'https://www.hp.com/'}
                    dates={'September 2023 - May 2024'} 
                    summary={[
                        'Configured Grafana dashboards to monitor firmware resources and logs for and HP Inc. software and VMs',
                        'Designed REST APIs with Flask to reboot software upon Grafana alerts, eliminating application downtime',
                        'Orchestrated automatic deployment of applications using Ansible, reducing human configuration error to 0%',
                        'Set up Oracle Databases using SQL to automatically populate data warehouses with resource utilization data',
                    ]} 
                />
                <ExperienceCard 
                    companyLogo={amd} 
                    roleName={'Software Engineer Intern'} 
                    companyName={'Advanced Micro Devices, Inc.'} 
                    link={'https://www.amd.com/en'}
                    dates={'January 2023 - May 2023'} 
                    summary={[
                        'Built automatic test equipment program validators, optimizing tests by 10% by removing broken workflows',
                        'Added temperature controls to AVFS modules using Java, allowing for more comprehensive test coverage',
                        'Created a full-stack web app using Flask, allowing engineers to override product specific configs for testing',
                    ]} 
                />
            </div>
        </div>
    );
};

export default Experience;