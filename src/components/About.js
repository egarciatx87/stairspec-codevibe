import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h2>International Residential Code (IRC) Standards</h2>
      <p>This technical prototype helps contractors ensure layout dimensions match code constraints prior to structural assembly.</p>
      
      <div className="code-table-container">
        <table className="code-table">
          <thead>
            <tr>
              <th>Specification Criterion</th>
              <th>IRC Structural Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Maximum Riser Height</strong></td>
              <td>7 ¾ Inches (197mm)</td>
            </tr>
            <tr>
              <td><strong>Minimum Tread Depth</strong></td>
              <td>10 Inches (254mm)</td>
            </tr>
            <tr>
              <td><strong>Baluster Guard Openings</strong></td>
              <td>Must reject a sphere 4 inches in diameter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;