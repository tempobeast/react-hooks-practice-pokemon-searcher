import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, search }) {

  const filterPokemons = pokemons.filter((pokemon) => {
    if (search === ""){
      return pokemon
    } else {
      return pokemon.name.toLowerCase().startsWith(search)
    }
  })
  
  const renderPokemonCards = filterPokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
