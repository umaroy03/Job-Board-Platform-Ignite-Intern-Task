import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import JobList from './JobList';
import Search from './Search';

const Home = () => (
  <Container className="my-4">
    <Row>
      <Col md={8}>
        <Card className="mb-4">
          <Card.Body>
            <h1>Welcome to the Job Platform</h1>
            <p>Find your dream job here!</p>
            <Search />
          </Card.Body>
        </Card>
        <h2>Job Listings</h2>
        <JobList />
      </Col>
      <Col md={4}>
        <Card className="mb-4">
          <Card.Header>Profile</Card.Header>
          <Card.Body>
            <Card.Title>John Doe</Card.Title>
            <Card.Text>
              Software Engineer at XYZ Company
            </Card.Text>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Header>Network</Card.Header>
          <Card.Body>
            <Card.Title>Connections</Card.Title>
            <Card.Text>
              150 Connections
            </Card.Text>
            <Button variant="primary">View Connections</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
