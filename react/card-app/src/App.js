// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "John"; // Change this to your first name or leave it as "" for "Hello, there!"

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <p>Hello, {firstName}!</p>
        ) : (
          <p>Hello, there!</p>
        )}
        {firstName && <img src="https://via.placeholder.com/50" alt="Placeholder" />}
      </div>
    </Container>
  );
}

export default App;
