import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { changeStatus } from "../../actions/statusActions";
import { createUseStyles, useTheme } from "react-jss";

let useStyles = createUseStyles((theme) => ({
  status: {
    color: theme.colorSecondary,
  },
}));

const Status = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  const dispatch = useDispatch();
  const status = useSelector(({ status: { status } }) => status);
  const handleClick = () => {
    const payload = status === "ready" ? "not ready" : "ready";
    dispatch(changeStatus(payload));
  };

  return (
    <>
      <p className={classes.status}>{status}</p>
      <Button
        className="status-btn"
        title="change status"
        onClick={handleClick}
      />
    </>
  );
};

export default Status;
