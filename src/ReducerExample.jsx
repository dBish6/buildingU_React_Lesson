import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "clear":
      return { count: 0 };
    default:
      throw new Error("WHAT IS THE TYPE");
  }
};

export default function ReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Total: {state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>
        increase
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        decrease
      </button>
      <button onClick={() => dispatch({ type: "clear" })}>
        clear
      </button>
    </div>
  );
}
