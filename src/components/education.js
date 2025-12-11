import React from 'react';
import './education.css';

const Education = () => {
    return (
        <div id="education" className='page-wrapper'>
            <div className="education-container">
                <div className="education-card">
                    <div className="logo">
                        <img src="https://github.com/DCDGRG/image/blob/main/XDUlogo.png?raw=true" alt="XiDian University" />
                    </div>
                    <div className="education-details">
                        <h3>Bachelor of Engineering</h3>
                        <div className="institution">XiDian University</div>
                        <div className="timeline">2020 - 2024</div>
                        <div className="major">Major: Computer Science and Technology</div>
                        <div className="gpa">GPA: 3.4/4.0</div>
                        <div className="core-courses">
                            <h4>Core Courses:</h4>
                            <ul>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                                <li>Operating Systems</li>
                                <li>Computer Networks</li>
                                <li>Database Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="education-card">
                    <div className="logo">
                        <img src="https://github.com/DCDGRG/image/blob/main/ucr-seal-big.png?raw=true" alt="UCRlogo" />
                    </div>
                    <div className="education-details">
                        <h3>Master of Computer Science</h3>
                        <div className="institution">University of California, Riverside (UCR)</div>
                        <div className="timeline">Enrolled Fall 2024 - Expected Graduation 2026</div>
                        <div className="focus">Focus: Advanced Computing and Research</div>
                        <div className="description">
                            <h4>Program Overview</h4>
                            <p>Engaged in cutting-edge research in artificial intelligence, distributed systems, and data analysis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;