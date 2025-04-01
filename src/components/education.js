import React from 'react';
import './education.css';

function Education() {
    return (
        <div id="education" className='page-wrapper'>
            <div className="education-container">
                <div className="logo">
                    <img src="https://github.com/DCDGRG/image/blob/main/XDUlogo.png?raw=true" alt="XDUlogo" />
                </div>
                <div className="education-details">
                    <h3>Bachelor of Software Engineer</h3>
                    <p>XiDian University</p>
                    <p>Graduated in 2024</p>
                    <p>Major: Software Engineer</p>
                    <p style={{ textIndent: 0 }}>Core course</p>
                    <ul>
                        <li>Computer Network</li>
                        <li>Software Engineering</li>
                        <li>Operating System</li>
                        <li>Computer Architecture</li>
                        <li>Algorithm</li>
                    </ul>
                </div>
            </div>

            <div className="education-container">
                <div className="logo">
                    <img src="https://github.com/DCDGRG/image/blob/main/ucr-seal-big.png?raw=true" alt="UCRlogo" />
                </div>
                <div className="education-details">
                    <h3>Master of Computer Science</h3>
                    <p>University of California, Riverside (UCR)</p>
                    <p>Enrolled Fall 2024 - Graduated in 2026</p>
                    <p>Focus: Advanced computing and research</p>
                    <p>Description: Engaged in cutting-edge research in artificial intelligence, distributed systems, and data analysis.</p>
                </div>
            </div>
        </div>
    );
}

export default Education;