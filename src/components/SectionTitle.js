import React from 'react';
import './sectionTitle.css';

const SectionTitle = ({ children, eyebrow, targetId }) => {
    return (
        <div className="section-title-container" data-nav-target={targetId || undefined}>
            {eyebrow && <p className="section-title-eyebrow">{eyebrow}</p>}
            <h2 className="section-title">{children}</h2>
        </div>
    );
};

export default SectionTitle; 
