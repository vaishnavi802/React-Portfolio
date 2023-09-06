import React from 'react'
import './awards.css'

const Awards = () => {
  return <div className="award_container d-flex align-items-center flex-wrap justify-content-between">
    <div className="award_item">
        <AwardItem year='2020' title='Best frontend developer' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'/>
    </div>

    <div className="award_item">
        <AwardItem year='2020' title='Best frontend developer' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'/>
    </div>

    <div className="award_item">
        <AwardItem year='2020' title='Best frontend developer' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'/>
    </div>

    <div className="award_item">
        <AwardItem year='2020' title='Best frontend developer' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'/>
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