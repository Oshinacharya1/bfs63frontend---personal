import { useGetCountriesQuery } from "./country";

export default function Country() {
  const { data } = useGetCountriesQuery();
  console.log(data);

  return data?.map((country, index) => (
    <div key={index}>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt="" />
    </div>
  ));
}
