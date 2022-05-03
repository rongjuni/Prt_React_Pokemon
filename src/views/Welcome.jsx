/*eslint-disable*/

import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Card className="text-center">
      <Card.Header>Welcome To PokeWorld</Card.Header>
      <Card.Body>
        <Card.Title>Pokemons Are Still In My Hearts</Card.Title>
        <Card.Text>
          But there are so many pokemons (even more in newer version) that we
          cannot remember all their characters. This Pokemon dictionary will
          help you recall.
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/pokemon");
          }}
        >
          Go to See Pokemons
        </Button>
      </Card.Body>
      <Card.Footer
        className="text-muted"
        // Link to combined portfolio will be added once completed
        onClick={() => {
          alert("Add: Will be directed to combined portfolio");
        }}
        style={{ cursor: "pointer" }}
      >
        Matt Seo
      </Card.Footer>
    </Card>
  );
};

export default Welcome;
