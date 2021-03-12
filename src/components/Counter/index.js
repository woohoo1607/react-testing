import React, { useState } from "react";
import Button from "../UI/Button";
import { createUseStyles, useTheme } from "react-jss";

let useStyles = createUseStyles((theme) => ({
  counter: {
    color: theme.colorPrimary,
  },
}));

const Counter = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className={classes.counter}>{count}</p>
      <Button
        className="counter-btn"
        title="click me"
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
};

export default Counter;
