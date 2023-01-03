import React, { useContext } from "react";
import { PokemonContext } from "../context/PokeProvider";

export const FilterBar = () => {
  const { active, handleCheck } = useContext(PokemonContext);

  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="filter-type">
        <span>Type</span>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="grass"
            id="grass"
          />
          <label htmlFor="grass">Grass</label>
        </div>
        <div className="group-type">
          <input type="checkbox" onChange={handleCheck} name="fire" id="fire" />
          <label htmlFor="fire">Fire</label>
        </div>
        <div className="group-type">
          <input type="checkbox" onChange={handleCheck} name="bug" id="bug" />
          <label htmlFor="bug">Bug</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">Fairy</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragon</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="shadow"
            id="shadow"
          />
          <label htmlFor="shadow">Shadow</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="ground"
            id="ground"
          />
          <label htmlFor="ground">Ground</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psychic</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">Steel</label>
        </div>
        <div className="group-type">
          <input type="checkbox" onChange={handleCheck} name="dark" id="dark" />
          <label htmlFor="dark">Dark</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">Electric</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Fighting</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="flying"
            id="flying"
          />
          <label htmlFor="flying">Flying</label>
        </div>
        <div className="group-type">
          <input type="checkbox" onChange={handleCheck} name="ice" id="ice" />
          <label htmlFor="ice">Ice</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">Poison</label>
        </div>
        <div className="group-type">
          <input type="checkbox" onChange={handleCheck} name="rock" id="rock" />
          <label htmlFor="rock">Rock</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheck}
            name="water"
            id="water"
          />
          <label htmlFor="water">Water</label>
        </div>
      </div>
    </div>
  );
};
