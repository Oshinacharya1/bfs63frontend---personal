import { useGetPokemonByNameQuery } from "./pokemon";

export default function Pokemon() {
  const { data } = useGetPokemonByNameQuery("bulbasaur");

  return <img src={data?.sprites.back_default} />;
}
