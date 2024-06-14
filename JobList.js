import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebaseConfig';
import { ListGroup, Container } from 'react-bootstrap';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsCollection = await firestore.collection('jobs').get();
      setJobs(jobsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchJobs();
  }, []);

  return (
    <Container className="mt-4">
      
      <ListGroup>
        {jobs.map(job => (
          <ListGroup.Item key={job.id}>
            <Link to={`/job-details/${job.id}`}>{job.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default JobList;
