import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(() => {
    console.log("run FUNction");
    return 2;
  });

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
    </>
  );
}
