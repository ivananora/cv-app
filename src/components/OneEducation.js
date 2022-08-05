import React from 'react';

const OneEducation = (props) => {
  const { educations } = props;

  return (
    <div>
      {educations.map((singleEducation) => {
        return(
          <div>
            <h4>{singleEducation.education.degree}</h4>
            <p>{singleEducation.education.universityName}</p>
            <p>{singleEducation.education.date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default OneEducation;