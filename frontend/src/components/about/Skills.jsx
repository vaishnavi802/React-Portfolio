import React from 'react'
import './skills.css'

const frontendSkills = [
    {
        tiyle: 'C',
        percentage: '90%'
    },
    {
        tiyle: 'CPP',
        percentage: '90%'
    },
    {
        tiyle: 'HTML',
        percentage: '85%'
    },
    {
        tiyle: 'CSS',
        percentage: '80%'
    },
]

const backendSkills = [
    {
        tiyle: 'React.js',
        percentage: '80%'
    },
    {
        tiyle: 'Node.js',
        percentage: '60%'
    },
    {
        tiyle: 'MongoDB',
        percentage: '70%'
    },
    {
        tiyle: 'MySQL',
        percentage: '75%'
    },
]

const Skills = () => {
    return (
        <div className="skills_wrapper d-flex gap-5">
            <div className="frontend_skill w-50">
                {
                    frontendSkills.map((item, index) => (
                        <SkillItem key={index} title={item.tiyle} percentage={item.percentage} />
                    ))
                }

            </div>

            <div className="backend_skill w-50">
            {
                backendSkills.map((item, index) => (
                    <SkillItem key={index} title={item.tiyle} percentage={item.percentage} />
                ))
            }
            </div>
            
        </div>
    );
}

const SkillItem = ({ title, percentage }) => {
    return (
        <div className="skill_data mb-3">
            <div className="skill_title d-flex align-items-center justify-content-between">
                <h6>{title}</h6>
                <span>{percentage}</span>
            </div>
            <div className="skill_bar">
                <span className='skill_bar_percentage' style={{ width: `${percentage}` }}></span>
            </div>
        </div>
    );
}
export default Skills