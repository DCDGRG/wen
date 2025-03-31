
// export default Projects;

import React from "react";
import './project.css';

function Projects() {
    return (
        <div className="project-container">
            <div className="projects">

                {/* Project 1: NYT News */}
                <div className="project-item">
                    <div className="project-text">
                        <p className="projectName">Front-end(React): NYT News</p>
                        <p className="project-description">
                            This is a small project in CS110, aiming to implement the function of searching news from the New York Times API, 
                            with an additional feature to filter news by selection.
                        </p>
                        <div className="project-buttons">
                            <a href="https://demo-link.com" className="demo">
                                <i className="fas fa-eye"></i> Demo
                            </a>
                            <a href="https://github.com/DCDGRG/NYT_ReactProject" className="github">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    <img src="https://github.com/DCDGRG/image/blob/main/photo_2022-11-20_20-01-06.jpg?raw=true" alt="project" className="project-image" />
                </div>

                {/* Project 2: ChatRoom */}
                <div className="project-item">
                    <div className="project-text">
                        <p className="projectName">Full stack: ChatRoom</p>
                        <p className="project-description">
                            A real-time chat room application built with a Node.js backend and a React frontend, using WebSocket for communication.
                        </p>
                        <div className="project-buttons">
                            <a href="https://demo-link.com" className="demo">
                                <i className="fas fa-eye"></i> Demo
                            </a>
                            <a href="https://github.com/your-repo" className="github">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    <img src="https://via.placeholder.com/300" alt="project" className="project-image" />
                </div>

                

                {/* Project 3: NLP */}
                <div className="project-item">
                    <div className="project-text">
                        <p className="projectName">NLP: Text Sentiment Analysis</p>
                        <p className="project-description">
                            A Natural Language Processing project to analyze the sentiment of tweets using Python and the NLTK library.
                        </p>
                        <div className="project-buttons">
                            <a href="https://demo-link.com" className="demo">
                                <i className="fas fa-eye"></i> Demo
                            </a>
                            <a href="https://github.com/your-repo" className="github">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    <img src="https://via.placeholder.com/300" alt="project" className="project-image" />
                </div>

            </div>
        </div>
    );
}

export default Projects;