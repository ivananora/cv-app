import React from 'react';

const Work = (props) => {
  const { displayJobs } = props;

  return (
    <div>
      {displayJobs.map((singleJob) => {
        return(
          <div>
            <h4>{singleJob.job.jobTitle}</h4>
            <p>{singleJob.job.companyName} | {singleJob.job.address} | {singleJob.job.date}</p>
            <p>{singleJob.job.jobSummary}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Work;