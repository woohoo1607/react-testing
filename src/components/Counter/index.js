import React, { useState } from "react";
import Button from "../UI/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="counter">{count}</p>
      <Button
        className="counter-btn"
        title="click me"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
};

export default Counter;
