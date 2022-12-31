import React, { useContext } from "react";
import { PokemonContext } from "../context/PokeProvider";
import { PokemonCard } from "../components/PokemonCard";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { allPokemon, loading, filterPokemon } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          {filterPokemon.length ? (
            <>
              {filterPokemon.map((poke) => (
                <PokemonCard pokemon={poke} key={poke.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemon.map((poke) => (
                <PokemonCard pokemon={poke} key={poke.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
