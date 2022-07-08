/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputGroup, FormControl, Dropdown } from "react-bootstrap";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  // searched input is saved in filterList.
  const [filterList, setFilteredList] = useState([]);
  const location = useLocation();

  // fetching if not fetched yet
  useEffect(() => {
    if (pokemonList.length === 0) {
      fetchPokemon();
    }
  });
  const fetchPokemon = () => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGo-Pokedex/master/pokedex.json",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((result) => {
        const { pokemon } = result;
        setPokemonList(pokemon);
        setFilteredList(pokemon);
      })
      .catch((error) => console.log(error));
  };

  // Find typed in input box and update FilteredList which will passed to Card Component
  const handleSearchInput = (event) => {
    const updatedList = pokemonList.filter((pokemon) => {
      if (
        pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredList(updatedList);
  };

  return (
    <main className="container text-center">
      <h1>Pokedex Page Home</h1>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <FormControl
          placeholder="Enter Pokemon Name"
          onChange={handleSearchInput}
        />

        {/* will be added attack type and weaknesses*/}
      </InputGroup>

      <div className="row">
        {filterList.length < 1
          ? console.log("empty")
          : filterList.map((filterListValues) => {
              return (
                <Express
                  filterListValues={filterListValues}
                  pokemonList={pokemonList}
                />
              );
            })}
      </div>
    </main>
  );
}; //Home function ending line//

// Func Express is to filterList which saves searched input
const Express = ({ filterListValues, pokemonList }) => {
  const navigate = useNavigate();
  return (
    <div className="card col-md-4">
      <div className="card-body">
        <span
          to={`/pokemon/${filterListValues.num}${filterListValues.name}`}
          onClick={() => {
            navigate(
              `/pokemon/${filterListValues.num}-${filterListValues.name}`,
              {
                state: {
                  selectedItem: filterListValues,
                  pokemonListPass: pokemonList,
                },
              }
            );
          }}
          style={{ cursor: "pointer" }}
        >
          <h3>{filterListValues.num}</h3>
          <h1>{filterListValues.name}</h1>
          <img width="200" src={filterListValues.img} alt="pokemon pictures" />
        </span>
      </div>
    </div>
  );
}; // func Express ending line

export default Home;
