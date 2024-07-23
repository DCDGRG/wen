import React from 'react';
import './education.css';

function Education() {
    return (
        <div className='page-wrapper'>
            <div className="education-container">
                <div className="XDUlogo">
                    <img src="https://github.com/DCDGRG/image/blob/08d2b2e5976ec18f45da68ac8200472a72dd48f8/XDUlogo.png" alt="XDUlogo" />
                </div>

                <div className="education-details">
                    <h3>Bachelor of Software Engineer</h3>
                    <p>XiDian University</p>
                    <p>Graduated in 2024</p>
                    <p>Major: Software Engineer</p>
                    <p>Core course</p>
                    <p>
                    <ul>
                        <li>Computer Network</li>
                        <li>Software Engineering</li>
                        <li>Operating System</li>
                        <li>Computer Architecture</li>
                        <li>Algorithm</li>
                    </ul>
                    </p>
                    
               
                </div>
            </div>
        </div>
    );
}

export default Education;