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
        <Card.Title>Developed for My Daughter's Tantrum Handling</Card.Title>
        <Card.Text
          style={{ width: "50%", margin: "1rem auto", fontStretch: "expanded" }}
        >
          Everytime my 3 years old daughter throws a tantrum, I show her this
          list of pokemons and ask her who she wants call. Then I pretent to
          call and talk to the pokemon and tell my daughter that they will visit
          our home if she is doing well. It has costed little extra money as I
          had to buy pokemon plushies that promised to visit on the phone, but
          it works greatly to calm her down!
        </Card.Text>
        <Button
          variant="success"
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
        onClick={() => window.open("https://blogmain.vercel.app/", "_blank")}
        style={{ cursor: "pointer" }}
      >
        <div>Matt Seo</div>
      </Card.Footer>
    </Card>
  );
};

export default Welcome;
