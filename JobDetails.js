import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { firestore } from '../firebaseConfig';

const JobDetails = ({ match }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const doc = await firestore.collection('jobs').doc(match.params.id).get();
      if (doc.exists) {
        setJob(doc.data());
      }
    };

    fetchJob();
  }, [match.params.id]);

  if (!job) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>{job.title}</Card.Header>
        <Card.Body>
          <Card.Text>{job.description}</Card.Text>
          <Button variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JobDetails;
