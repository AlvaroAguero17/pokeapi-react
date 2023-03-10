import { PokemonList } from "../components/PokemonList";
import { useContext, useRef } from "react";
import { PokemonContext } from "../context/PokeProvider";
import { FilterBar } from "../components/FilterBar";
import useOnClickOutside from "../hooks/useOnClickOutside";

export const IndexPage = () => {
  const { onLoadMore, loading, active, setActive } = useContext(PokemonContext);
  const ref = useRef();

  useOnClickOutside(ref, () => setActive(false));
  return (
    <>
      <div className="container container-filter">
        <div className="filter" onClick={() => setActive(!active)} ref={ref}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
          <span>Filter</span>
        </div>
      </div>

      <PokemonList />
      <FilterBar />

      {loading ? (
        <div className="container load-more">
          <button className="btn-load-more" onClick={onLoadMore} hidden>
            Load more
          </button>
        </div>
      ) : (
        <div className="container load-more">
          <button className="btn-load-more" onClick={onLoadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};
