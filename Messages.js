import React, { useEffect, useState } from 'react';
import { sendMessage, getMessages } from '../messagesService';
import { auth } from '../firebaseConfig';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const user = auth.currentUser;
      if (user) {
        const userMessages = await getMessages(user.uid);
        setMessages(userMessages);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      await sendMessage(user.uid, message);
      setMessages([...messages, { text: message, timestamp: new Date() }]);
      setMessage('');
    }
  };

  return (
    <Container className="mt-4">
      <h2>Messages</h2>
      <Form onSubmit={handleSendMessage}>
        <Form.Group controlId="formMessage">
          <Form.Label>New Message</Form.Label>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
      <ListGroup className="mt-4">
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>{msg.text}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Messages;
