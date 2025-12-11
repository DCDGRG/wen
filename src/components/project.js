// export default Projects;

import React from "react";
import './project.css';

function Projects() {
    return (
        <div id="projects" className='page-wrapper'>
            <div className="project-container">
                <div className="projects">
                    {/* Project 1: NYT News */}
                    <div className="project-card">
                        <div className="project-image-container">
                            <img src="https://github.com/DCDGRG/image/blob/main/photo_2022-11-20_20-01-06.jpg?raw=true" alt="NYT News Project" className="project-image" />
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">Front-end(React): NYT News</h3>
                            <p className="project-description">
                                This is a small project in CS110, aiming to implement the function of searching news from the New York Times API, 
                                with an additional feature to filter news by selection.
                            </p>
                            <div className="project-buttons">
                                <a href="https://demo-link.com" className="demo-button">
                                    <i className="fas fa-eye"></i> Demo
                                </a>
                                <a href="https://github.com/DCDGRG/NYT_ReactProject" className="github-button">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: ChatRoom */}
                    <div className="project-card">
                        <div className="project-image-container">
                            <img src="https://via.placeholder.com/300" alt="ChatRoom Project" className="project-image" />
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">Full stack: ChatRoom</h3>
                            <p className="project-description">
                                A real-time chat room application built with a Node.js backend and a React frontend, using WebSocket for communication.
                            </p>
                            <div className="project-buttons">
                                <a href="https://demo-link.com" className="demo-button">
                                    <i className="fas fa-eye"></i> Demo
                                </a>
                                <a href="https://github.com/your-repo" className="github-button">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: NLP */}
                    <div className="project-card">
                        <div className="project-image-container">
                            <img src="https://via.placeholder.com/300" alt="NLP Project" className="project-image" />
                        </div>
                        <div className="project-content">
                            <h3 className="project-name">NLP: Text Sentiment Analysis</h3>
                            <p className="project-description">
                                A Natural Language Processing project to analyze the sentiment of tweets using Python and the NLTK library.
                            </p>
                            <div className="project-buttons">
                                <a href="https://demo-link.com" className="demo-button">
                                    <i className="fas fa-eye"></i> Demo
                                </a>
                                <a href="https://github.com/your-repo" className="github-button">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;