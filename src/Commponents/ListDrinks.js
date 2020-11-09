import React from "react";
import Drink from "./Drink";
import Spinner from "react-bootstrap/Spinner";
function ListDrinks({ cocktails, cocktailsLoad, searched, setShow }) {
  return (
    <div className="cocktail-container">
      {cocktailsLoad ? (
        <Spinner animation="border" variant="primary" />
      ) : cocktails.length === 0 ? (
        <h2>Nothing to show !!</h2>
      ) : cocktails.filter((el) =>
          el.strDrink.toLowerCase().includes(searched.toLowerCase())
        ).length === 0 ? (
        <h2>Nothing to show !!</h2>
      ) : (
        cocktails
          .filter((el) =>
            el.strDrink.toLowerCase().includes(searched.toLowerCase())
          )
          .map((el, i) => <Drink key={i} cocktail={el} setShow={setShow} />)
      )}
    </div>
  );
}

export default ListDrinks;
