import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment } from "./counter-slice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          className="bg-yellow-400 p-2 m-2 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="rounded-full bg-purple-300 p-2">{count}</span>
        <button
          className="bg-yellow-400 p-2 m-2 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
