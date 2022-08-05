import React from 'react';

const Skill = (props) => {
  const { skills } = props;

  return (
    <ul>
      {skills.map((skills) => {
        return <li key={skills.id}>• {skills.skill}</li>
      })}
    </ul>
  )
}

export default Skill;