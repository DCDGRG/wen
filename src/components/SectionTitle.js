import React from 'react';
import './sectionTitle.css';

const SectionTitle = ({ children }) => {
    return (
        <div className="section-title-container">
            <h2 className="section-title">{children}</h2>
        </div>
    );
};

export default SectionTitle; 