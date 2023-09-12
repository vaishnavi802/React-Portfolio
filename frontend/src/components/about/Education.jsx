import React from 'react'
import './education.css'

const Education = () => {
  return <table className="education-table">
    <thead>
        <tr>
            <th>Degree</th>
            <th>Department</th>
            <th>Institute</th>
            <th>Year</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>B.Tech.</td>
            <td>Information Technology</td>
            <td>Walchand College of Engineering, Sangli</td>
            <td>2020-24</td>
        </tr>
        <tr>
            <td>Higher Secondary Education</td>
            <td>PCM</td>
            <td>St.Tukaram National Model School, Latur</td>
            <td>2020</td>
        </tr>
        <tr>
            <td>Secondary School Education</td>
            <td>Science</td>
            <td>GKYK, School Ambajogai, Dist. Beed</td>
            <td>2018</td>
        </tr>
        </tbody>
  </table>
}

export default Education