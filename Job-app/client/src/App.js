import React, { useState } from 'react';
import JobList from './components/JobList';
import JobForm from './components/JobForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleJobCreated = () => {
    setRefresh(prev => !prev);
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h1>Job Application Portal</h1>
      <JobForm onJobCreated={handleJobCreated} />
      <hr />
      <JobList key={refresh} />
    </div>
  );
}

export default App;
