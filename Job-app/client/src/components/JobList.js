import React, { useEffect, useState } from 'react';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/v1/job/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setJobs(data.jobs);
      });
  }, []);

  return (
    <div>
      <h2>All Jobs</h2>
      {jobs.length === 0 && <p>No jobs found.</p>}
      {jobs.map((job, idx) => (
        <div key={idx} style={styles.card}>
          <h3>{job.title} - {job.company}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.minExp} yrs</p>
          <p><strong>Salary:</strong> ₹{job.salary}</p>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Skills:</strong> {job.skills?.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px"
  }
};

export default JobList;
