import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonCard } from "../components/PokemonCard";
import { PokemonContext } from "../context/PokeProvider";

export const SearchPage = () => {
  const location = useLocation();

  const { noLimitPokemon } = useContext(PokemonContext);

  const filterPokemon = noLimitPokemon.filter((poke) =>
    poke.name.includes(location.state.toLowerCase())
  );

  return (
    <div>
      {filterPokemon.length === 0 ? (
        <h1>0 pokemon founds</h1>
      ) : (
        <div className="card-list-pokemon container">
          {filterPokemon.map((poke) => (
            <PokemonCard pokemon={poke} key={poke.id} />
          ))}
        </div>
      )}
    </div>
  );
};
