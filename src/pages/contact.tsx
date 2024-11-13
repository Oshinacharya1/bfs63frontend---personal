import { useAppDispatch } from "../app/hooks";
import { increment } from "../features/counter/counter-slice";

function Contact() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-900 p-2 text-white m-2 rounded"
      >
        Increment Counter
      </button>
    </div>
  );
}

export default Contact;
