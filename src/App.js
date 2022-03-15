import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(10);
  const [num1, setNum1] = useState(1);
  return (
    <div>
      <p>If state changes {num} the component will update automatically </p>
      <h1>Inc : {num}</h1>
      <h1>Dec : {num1}</h1>
      <button
        onClick={function () {
          setNum(num + 1);
        }}
      >
        Inc
      </button>
      <button
        onClick={function () {
          setNum1(num1 - 1);
        }}
      >
        Dec
      </button>

      <h2>Whenever the state changes the component {num} re-render</h2>
    </div>
  );
}
export default function App() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}
