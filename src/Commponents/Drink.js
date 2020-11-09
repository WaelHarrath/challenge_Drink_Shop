import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Drink({ cocktail, setShow }) {
  return (
    <Card style={{ width: "18rem", margin: "2%" }}>
      <Card.Img variant="top" src={cocktail.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{cocktail.strDrink}</Card.Title>
        <Card.Text></Card.Text>
        <Link to={`/List_of_Drinks/${cocktail.idDrink}`}>
          <Button variant="primary" onClick={() => setShow(false)}>
            See Details...
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Drink;
