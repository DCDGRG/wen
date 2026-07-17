import React from "react";
import webtestHome from '../assets/webtest-home.jpg';
import './project.css';

const projects = [
    {
        title: "NYT News Search",
        type: "Frontend / React",
        description: "A course project that searches New York Times articles and filters results by selected criteria.",
        tags: ["React", "REST API", "Search UX"],
        github: "https://github.com/DCDGRG/NYT_ReactProject",
        icon: "far fa-newspaper",
        visual: "NYT"
    },
    {
        title: "Real-time ChatRoom",
        type: "Full-stack",
        description: "A chat room concept with a Node.js backend, React frontend, and WebSocket communication.",
        tags: ["Node.js", "React", "WebSocket"],
        icon: "fas fa-comments",
        visual: "Chat"
    },
    {
        title: "Text Sentiment Analysis",
        type: "NLP / Python",
        description: "A natural language processing project that analyzes tweet sentiment with Python and NLTK.",
        tags: ["Python", "NLTK", "Sentiment"],
        icon: "fas fa-chart-line",
        visual: "NLP"
    },
    {
        title: "webTest",
        type: "Full-stack / Business Website",
        description: "A molding company website built with a React + TypeScript frontend and an Express backend.",
        tags: ["React", "TypeScript", "Express", "SQLite"],
        github: "https://github.com/DCDGRG/webTest",
        icon: "fas fa-industry",
        visual: "Web",
        image: webtestHome
    }
];

function Projects() {
    return (
        <div id="projects" className='page-wrapper'>
            <div className="project-container">
                <div className="projects">
                    {projects.map((project, index) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-media">
                                {project.image ? (
                                    <img src={project.image} alt={`${project.title} homepage preview`} className="project-image" />
                                ) : (
                                    <div className="project-icon-panel" aria-hidden="true">
                                        <i className={project.icon}></i>
                                        <strong>{project.visual}</strong>
                                    </div>
                                )}
                                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                            </div>

                            <div className="project-content">
                                <p className="project-type">{project.type}</p>
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags" aria-label={`${project.title} technologies`}>
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className="project-buttons">
                                    {project.github ? (
                                        <a href={project.github} className="github-button" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i> GitHub
                                        </a>
                                    ) : (
                                        <span className="project-note">Repository link pending</span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
