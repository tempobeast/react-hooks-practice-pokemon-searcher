import React, { useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then((data) => setPokemons(data))
  }, [])

  function onSeachChange(e) {
    setSearch(e.target.value)
  }

  function resetPokemons(obj) {
    setPokemons([...pokemons, obj])
  } 

  function onFormSubmit(newPokeObj) {
    fetch("http://localhost:3001/pokemon/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokeObj)
    })
    .then((res) => res.json())
    .then((data) => resetPokemons(data))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={onFormSubmit}/>
      <br />
      <Search onSeachChange={onSeachChange}/>
      <br />
      <PokemonCollection pokemons={pokemons} search={search}/>
    </Container>
  );
}

export default PokemonPage;
