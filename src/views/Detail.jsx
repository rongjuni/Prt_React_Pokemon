/* eslint-disable */

import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Detail = () => {
  const navigate = useNavigate();

  // useLocation to receive the value passed from Pokemon. Clicked card API
  const location = useLocation();

  // Storing clicked/passed API object from Pokemon.jsx
  const [selectedItem, setSelectedItem] = useState(location.state.selectedItem);

  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={selectedItem.img}
          style={{ width: "15rem" }}
        />

        <Card.Body>
          <Card.Title>
            {selectedItem.num} - {selectedItem.name}
          </Card.Title>

          <Card.Text>
            <p>
              Height: {selectedItem.height} / Weight: {selectedItem.weight}
            </p>
            <h4> Evolution </h4>
            {selectedItem.prev_evolution
              ? selectedItem.prev_evolution.map(function (val, ind) {
                  return <Evolution val={val} />;
                })
              : null}
            {selectedItem.next_evolution
              ? selectedItem.next_evolution.map(function (val, ind) {
                  return <Evolution val={val} />;
                })
              : null}
            <h6>
              AttackType :
              {selectedItem.type.map((val, ind) => {
                return <AttackTypes val={val} />;
              })}
            </h6>
            <h6>
              Weaknesses :
              {selectedItem.weaknesses.map((val, ind) => {
                return <Weaknesses val={val} />;
              })}{" "}
            </h6>
          </Card.Text>
        </Card.Body>

        <Button
          onClick={() => {
            navigate("/pokemon");
          }}
        >
          Back
        </Button>
      </Card>
    </div>
  );
}; //main ending line

// func Evolution to show evlution object in API
const Evolution = (props) => {
  const navigate = useNavigate();
  const passedValue = props.val;
  return (
    <div
      onClick={() => {
        navigate(`/pokemon/`);
      }}
    >
      <p>
        {props.val.num} - {props.val.name}
      </p>
    </div>
  );
};

// to show weakness in API
const Weaknesses = (props) => {
  return <span> {props.val} </span>;
};

// to show AttackTypes in API
const AttackTypes = (props) => {
  return <span> {props.val} </span>;
};

export default Detail;
