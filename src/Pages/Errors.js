import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import errImg from "./Images/errorImg.jpg";
function Errors({ setShow }) {
  useEffect(() => {
    setShow(false);
  }, []);
  return (
    <div className="error-container">
      <img src={errImg} alt="error404" />
      <Link to="/">
        <Button className="btn" onClick={() => setShow(true)}>
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default Errors;
