import React from 'react'
import './awards.css'

const Awards = () => {
  return <div className="award_container d-flex align-items-center flex-wrap justify-content-between">
    <div className="award_item">
        <AwardItem year='2022' title='Hacktoberfest' text='Successfully completed Hacktoberfest2K22.'/>
    </div>

    <div className="award_item">
        <AwardItem year='2022' title='TechFusion ' text='Competed in the TechFusion the event conducted by the SAIT club.'/>
    </div>

    <div className="award_item">
        <AwardItem year='2023' title='Codechef' text='2 Star Competitive Programmer at Codechef Platform (Rating above 1400).'/>
    </div>

    <div className="award_item">
        <AwardItem year='2023' title='Google cloud' text='Successfully completed Google Cloud Challenge'/>
    </div>
    
  </div>
};

const AwardItem = ({year,title,text})=>{
    return <div className="single_award">
            <div className="award_year">{year}</div>
            <h6 className="award_title">
                {title}- <span>{text}</span>
            </h6>
        </div>
}

export default Awards