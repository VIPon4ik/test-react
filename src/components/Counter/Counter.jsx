import React, { useReducer } from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload;

        default:
            throw new Error(`Unsupported action type ${action.type}`);
    }
};

export default function Counter() {
    const [count, dispatch] = useReducer(countReducer, 1);

    return (
        <div>
            <p>{count}</p>
            <button
                type="button"
                onClick={() => dispatch({ type: "increment", payload: 1 })}
            >
                Збільшити
            </button>
            <button
                type="button"
                onClick={() => dispatch({ type: "decrement", payload: 1 })}
            >
                Зменшити
            </button>
        </div>
    );
}
