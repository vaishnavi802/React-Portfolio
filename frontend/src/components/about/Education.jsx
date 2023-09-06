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
            <td>Master of Science</td>
            <td>Computer Science</td>
            <td>University of Dhaka</td>
            <td>2019</td>
        </tr>
        <tr>
            <td>Bachelor of Science</td>
            <td>Computer Science</td>
            <td>University of Dhaka</td>
            <td>2018</td>
        </tr>
        <tr>
            <td>HSC</td>
            <td>Science</td>
            <td>Notre Dame College</td>
            <td>2013</td>
        </tr>
        </tbody>
  </table>
}

export default Education