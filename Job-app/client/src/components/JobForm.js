import React, { useState } from 'react';

const JobForm = ({ onJobCreated }) => {
  const [job, setJob] = useState({
    title: "",
    location: "",
    minExp: "",
    salary: "",
    description: "",
    company: "",
    skills: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/v1/job/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...job,
        minExp: parseInt(job.minExp),
        salary: parseInt(job.salary),
        skills: job.skills.split(",").map(skill => skill.trim())
      })
    });

    const data = await response.json();
    if (data.success) {
      alert("Job created successfully");
      setJob({
        title: "",
        location: "",
        minExp: "",
        salary: "",
        description: "",
        company: "",
        skills: ""
      });
      onJobCreated();
    } else {
      alert("Error creating job");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Job</h2>
      <input name="title" placeholder="Title" value={job.title} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
      <input name="minExp" placeholder="Min Exp" type="number" value={job.minExp} onChange={handleChange} required />
      <input name="salary" placeholder="Salary" type="number" value={job.salary} onChange={handleChange} required />
      <input name="company" placeholder="Company" value={job.company} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={job.description} onChange={handleChange} required />
      <input name="skills" placeholder="Skills (comma-separated)" value={job.skills} onChange={handleChange} required />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
