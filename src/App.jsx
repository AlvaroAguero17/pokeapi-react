import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokeProvider";

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  );
}

export default App;
