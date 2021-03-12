import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button";
import { changeStatus } from "../../actions/statusActions";

const Status = () => {
  const dispatch = useDispatch();
  const status = useSelector(({ status: { status } }) => status);
  const handleClick = () => {
    const payload = status === "ready" ? "not ready" : "ready";
    dispatch(changeStatus(payload));
  };

  return (
    <>
      <p>{status}</p>
      <Button
        className="status-btn"
        title="change status"
        onClick={handleClick}
      />
    </>
  );
};

export default Status;
