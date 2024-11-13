import { useAppSelector } from "../app/hooks";

function About() {
  const currentValue = useAppSelector((state) => state.counter.value);

  return <div>The current counter value is: {currentValue}</div>;
}

export default About;
