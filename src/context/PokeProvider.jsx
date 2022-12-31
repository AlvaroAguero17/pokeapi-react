import { createContext, useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [noLimitPokemon, setNoLimitPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const baseURL = "https://pokeapi.co/api/v2/";
  //Load pokemon with limit
  const getAllPokemon = async (limit = 40) => {
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const pokeUrl = data.results.map(async (poke) => {
      const res = await fetch(poke.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(pokeUrl);

    setAllPokemon([...allPokemon, ...results]);
    setLoading(false);
  };

  //Load pokemon without limit

  const getNoLimitPokemon = async () => {
    const res = await fetch(`${baseURL}pokemon?limit=2000&offset=${offset}`);
    const data = await res.json();

    const pokeUrl = data.results.map(async (poke) => {
      const res = await fetch(poke.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(pokeUrl);

    setNoLimitPokemon(results);
    setLoading(false);
  };

  //Call pokemon id

  const getPokemonID = async (id) => {
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    getAllPokemon();
  }, [offset]);

  useEffect(() => {
    getNoLimitPokemon();
  }, []);

  //Load More

  const onLoadMore = () => {
    setOffset(offset + 40);
  };

  // Filter

  const [typeChoised, setTypeChoised] = useState({
    grass: false,
    fighting: false,
    normal: false,
    poison: false,
    flying: false,
    rock: false,
    bug: false,
    ground: false,
    ghost: false,
    steel: false,
    fire: false,
    electric: false,
    water: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const [filterPokemon, setFilterPokemon] = useState([]);

  const handleCheck = (e) => {
    setTypeChoised({
      ...typeChoised,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filterResult = noLimitPokemon.filter((poke) =>
        poke.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilterPokemon([...filterPokemon, ...filterResult]);
    } else {
      const filterResult = filterPokemon.filter(
        (poke) =>
          !poke.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilterPokemon([...filterResult]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemon,
        noLimitPokemon,
        getPokemonID,
        onLoadMore,
        setLoading,
        loading,
        active,
        setActive,

        handleCheck,
        filterPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
