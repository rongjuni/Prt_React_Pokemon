/* eslint-disable */

import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./Detail.css";
import PlayAudio from "./PlayAudio";

const Detail = () => {
  const navigate = useNavigate();
  // useLocation to receive the value passed from Pokemon. Clicked card API
  const location = useLocation();

  // Storing clicked/passed API object from Pokemon.jsx
  const [selectedItem, setSelectedItem] = useState(location.state.selectedItem);
  const [pokemonListPass, setPokemonListPass] = useState(
    location.state.pokemonListPass
  );

  return (
    <div>
      <DetailCard
        selectedItem={selectedItem}
        pokemonListPass={pokemonListPass}
        setSelectedItem={setSelectedItem}
      ></DetailCard>
    </div>
  );
}; //main ending line

const DetailCard = ({ selectedItem, pokemonListPass, setSelectedItem }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card style={{ width: "20rem", margin: "auto", marginTop: "1rem" }}>
        <Card.Img
          variant="top"
          src={selectedItem.img}
          style={{ width: "15rem", margin: "auto" }}
        />

        <PlayAudio selectedItem={selectedItem} />

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
              ? selectedItem.prev_evolution.map((val, ind) => {
                  return (
                    <Evolution
                      val={val}
                      pokemonListPass={pokemonListPass}
                      setSelectedItem={setSelectedItem}
                    />
                  );
                })
              : null}
            {selectedItem.next_evolution
              ? selectedItem.next_evolution.map((val, ind) => {
                  return (
                    <Evolution
                      val={val}
                      pokemonListPass={pokemonListPass}
                      setSelectedItem={setSelectedItem}
                    />
                  );
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
          variant="success"
          onClick={() => {
            navigate("/pokemon");
            // navigate(-1);
          }}
        >
          Back
        </Button>
      </Card>
    </div>
  );
};

// func Evolution to show evlution object in API
const Evolution = ({ val, pokemonListPass, setSelectedItem }) => {
  const navigate = useNavigate();
  console.log("value ", val);

  return (
    <div
      className="pointer"
      onClick={() => {
        const evol = pokemonListPass.filter((pokemon) => {
          if (pokemon.num.includes(val.num)) {
            return true;
          } else {
            return false;
          }
        });
        console.log("evolution ", evol);
        setSelectedItem(evol[0]);
        navigate(`/pokemon/${val.num}-${val.name}`, {
          state: {
            selectedItem: val,
          },
        });
      }}
    >
      <p>
        {val.num} - {val.name}
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
