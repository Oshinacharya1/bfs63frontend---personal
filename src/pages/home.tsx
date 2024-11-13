import Country from "../api/country-ui";
import Pokemon from "../api/pokemon-ui";
import { Counter } from "../features/counter/counter";

function Home() {
  return (
    <div>
      <Counter />
      <Pokemon />
      <Country />
    </div>
  );
}

export default Home;
