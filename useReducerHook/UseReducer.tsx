import { useReducer } from "react";

interface IinitialState {
  count: number;
}
interface Iactions {
  type: string;
  payload: number;
}
const initialState: IinitialState = {
  count: 0,
};

const reducer = (state: IinitialState, action: Iactions) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + action.payload };
    }
    case "decrement": {
      return { count: state.count - action.payload };
    }
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
