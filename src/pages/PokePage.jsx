import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PokemonContext } from "../context/PokeProvider";
import { Loader } from "../components/Loader";

export const PokePage = () => {
  const { getPokemonID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container mx-info">
            <div className="principal">
              <h1>
                #{pokemon.id} {pokemon.name}
              </h1>
              <div className="card-types">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="container-data">
              <div className="imagen">
                <img
                  src={pokemon.sprites.other.home.front_default}
                  alt={pokemon.name}
                />
              </div>
              <div className="container-stats">
                <div className="info-pokemon">
                  <div className="info">
                    <span>Height: {pokemon.height} </span>
                  </div>

                  <div className="info">
                    <span>Weight: {pokemon.weight} </span>
                  </div>
                </div>

                <div className="stats-pokemon">
                  <h2>Base stats</h2>

                  <div className="stat">
                    <span>Attack: </span>
                    <span>{pokemon.stats[0].base_stat}</span>
                  </div>

                  <div className="stat">
                    <span>Special Attack: </span>
                    <span>{pokemon.stats[3].base_stat}</span>
                  </div>

                  <div className="stat">
                    <span>HP: </span>
                    <span>{pokemon.stats[0].base_stat}</span>
                  </div>

                  <div className="stat">
                    <span>Defense: </span>
                    <span>{pokemon.stats[2].base_stat}</span>
                  </div>

                  <div className="stat">
                    <span>Special Defense: </span>
                    <span>{pokemon.stats[4].base_stat}</span>
                  </div>

                  <div className="stat">
                    <span>Speed: </span>
                    <span>{pokemon.stats[5].base_stat}</span>
                  </div>

                  {pokemon.id <= 1 ? (
                    <a href={`/pokemon/${pokemon.id - 1}`}>
                      <button className="btn prev" disabled>
                        prev
                      </button>
                    </a>
                  ) : (
                    <a href={`/pokemon/${pokemon.id - 1}`}>
                      <button className="prev">prev </button>
                    </a>
                  )}

                  <a href={`/pokemon/${pokemon.id + 1}`}>
                    <button className=" next">next</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
