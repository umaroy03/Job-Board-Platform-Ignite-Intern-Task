import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formSearchQuery">
          <Form.Control
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for jobs..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">Search</Button>
      </Form>
    </Container>
  );
};

export default Search;
