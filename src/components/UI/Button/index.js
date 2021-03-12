import React from "react";

const Button = ({ title = "", ...props }) => (
  <button className="button" {...props}>
    {title}
  </button>
);

export default Button;
