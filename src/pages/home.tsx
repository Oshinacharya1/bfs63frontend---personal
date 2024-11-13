import Pokemon from "../api/pokemon-ui";
import { Counter } from "../features/counter/counter";

function Home() {
  return (
    <div>
      <Counter />
      <Pokemon />
    </div>
  );
}

export default Home;
