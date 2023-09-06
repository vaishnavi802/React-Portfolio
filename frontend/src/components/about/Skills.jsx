import React from 'react'
import './skills.css'

const frontendSkills = [
    {
        tiyle: 'Javascript',
        percentage: '85%'
    },
    {
        tiyle: 'React.js',
        percentage: '90%'
    },
    {
        tiyle: 'Redux',
        percentage: '85%'
    },
    {
        tiyle: 'Next.js',
        percentage: '85%'
    },
]

const backendSkills = [
    {
        tiyle: 'Node.js',
        percentage: '85%'
    },
    {
        tiyle: 'Express.js',
        percentage: '85%'
    },
    {
        tiyle: 'MongoDB',
        percentage: '85%'
    },
    {
        tiyle: 'MySQL',
        percentage: '85%'
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