import React from "react";
import './skill.css'

const skillGroups = [
    {
        title: "Frontend",
        summary: "Responsive interfaces, component systems, and polished interaction details.",
        items: [
            { icon: "logos:react", label: "React" },
            { icon: "logos:vue", label: "Vue" },
            { icon: "vscode-icons:file-type-html", label: "HTML" },
            { icon: "vscode-icons:file-type-css", label: "CSS" },
            { icon: "vscode-icons:file-type-scss2", label: "SCSS" },
            { icon: "logos:bootstrap", label: "Bootstrap" }
        ]
    },
    {
        title: "Backend",
        summary: "APIs, real-time features, and server-side application foundations.",
        items: [
            { icon: "logos:nodejs-icon", label: "Node.js" },
            { icon: "logos:php", label: "PHP" },
            { icon: "logos:laravel", label: "Laravel" },
            { icon: "logos:python", label: "Python" },
            { icon: "logos:java", label: "Java" }
        ]
    },
    {
        title: "Data and Tools",
        summary: "Databases, cloud basics, source control, and production workflow.",
        items: [
            { icon: "logos:mysql", label: "MySQL" },
            { icon: "logos:git-icon", label: "Git" },
            { icon: "flat-color-icons:linux", label: "Linux" },
            { icon: "logos:aws", label: "Amazon AWS" },
            { icon: "logos:shopify", label: "Shopify" }
        ]
    }
];

function Skill() {
    return (
        <div id="skills" className='page-wrapper'>
            <div className="skill-container">
                {skillGroups.map((group) => (
                    <section className="skill-group" key={group.title}>
                        <div className="skill-group-copy">
                            <h3>{group.title}</h3>
                            <p>{group.summary}</p>
                        </div>
                        <div className="skills-grid">
                            {group.items.map((skill) => (
                                <div className="skill-item" key={skill.label}>
                                    <span className="iconify" data-icon={skill.icon} data-inline="false"></span>
                                    <span>{skill.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Skill;
