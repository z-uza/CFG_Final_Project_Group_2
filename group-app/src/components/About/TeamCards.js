import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TeamCards.css';

function TeamCards({ title, imgSrc, text, buttonText, link }) {
  return (
    <div className="custom-card">
      <Card>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">{buttonText}</Button>
            </a>
          ) : (
            <Button variant="primary">{buttonText}</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TeamCards;
