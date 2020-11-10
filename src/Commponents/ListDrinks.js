import React from "react";
import Drink from "./Drink";
import Spinner from "react-bootstrap/Spinner";
function ListDrinks({ cocktails, cocktailsLoad }) {
  return (
    <div className="cocktail-container">
      {cocktailsLoad ? (
        <Spinner animation="border" variant="primary" />
      ) :  (cocktails  ===  null || cocktails.length===0 ) ? (
         (
        <h2>Nothing to show !!</h2>
      )
      ) :  (
        cocktails.map((el, i) => <Drink key={i} cocktail={el} />)
      )}
    </div>
  );
}

export default ListDrinks;
