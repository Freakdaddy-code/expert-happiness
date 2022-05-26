import React, { useState, useEffect } from "react";

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

  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("rendering");
  }, [resourceType]);

  return (
    <>
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <h1>{resourceType}</h1>
      <div className="useEffect-hook">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
    </>
  );
}
