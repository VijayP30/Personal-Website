import React from 'react';
import ProjectCard from './project-card';

const Projects: React.FC<{ visible: boolean }> = ({ visible }) => {
    return (
        <div className={`projects-container ${visible ? 'visible' : ''}`}>
            <h1 className='projects-header'>Projects</h1>
            <div className='projects-card-container'>
                <ProjectCard 
                    name='CUDA to OpenCL Migration'
                    link={'https://github.com/VijayP30/cse160-docs'}
                    summary={[
                        'Open-sourced and migrated UCSD’s Parallel Programming curriculum from NVIDIA CUDA to OpenCL',
                        'Redesigned programming assignments using OpenCL, diversifying the architectures students can program on',
                        'Benchmarked Qualcomm’s Innovators Development Kit against UCSD platforms to develop parallel programs',
                    ]}
                    skills={['CUDA', 'OpenCL', 'C++', 'Parallel Programming', 'Qualcomm Innovators Development Kit']}
                />
                <ProjectCard 
                    name='Horoscope Web App'
                    link={'https://github.com/VijayP30/Horoscope-Team-5'}
                    summary={[
                        'Developed a full-stack horoscope web application using Node.js for server-side logic and vanilla JavaScript for the front-end, enabling users to generate daily personalized horoscopes',
                        'Implemented RESTful API endpoints to handle user requests and deliver horoscope data, ensuring efficient and scalable communication between the client and server',
                        'Utilized Express.js to set up server routing and handle HTTP requests, streamlining the process of delivering dynamic content based on user input',
                        'Collaborated with a team to deploy the application, focusing on code quality, debugging, and performance optimization to ensure a smooth and responsive user experience',

                    ]} 
                    skills={['Node.js', 'Express.js', 'RESTful API', 'JavaScript', 'HTML/CSS']}
                />
                <ProjectCard 
                    name='Goal Tracking Android App'
                    link={'https://github.com/VijayP30/Successorator'}
                    summary={[
                        'Served as Tech Lead, guiding 10 engineering students in developing a Goal-Tracking Android Java app',
                        'Utilized best-practice software design principles such as MVVM, MVC, Builder, and Factory patterns',
                        'Leveraged frameworks such as Room Database to create local In-Memory persistent databases',
                        'Demonstrated deep understanding of Android components and lifecycles in application development',
                    ]}
                    skills={['Java', 'Android Studio', 'Room Database', 'MVVM', 'MVC']}
                />
                <ProjectCard 
                    name='Strava Analysis Web App'
                    link={'https://github.com/VijayP30/Strava-Analysis'}
                    summary={[
                        'Leveraged the Strava API to fetch user activity data, automate data retrieval, and ensure real-time analysis and reporting',
                        'Implemented data cleaning and transformation processes using Pandas, enhancing data accuracy and preparing it for detailed analysis and visualization',
                        'Created interactive visualizations with Matplotlib and Seaborn to present activity trends, performance improvements, and other key metrics in a user-friendly format',
                        'Developed and trained machine learning models using scikit-learn and TensorFlow to predict race performance based on historical Strava data, providing users with personalized insights and performance forecasts'
                    ]} 
                    skills={['Python', 'Strava API', 'Flask', 'Matplotlib', 'Seaborn', 'Pandas', 'Scikit-Learn', 'TensorFlow']}
                />
            </div>
        </div>
    );
};

export default Projects;