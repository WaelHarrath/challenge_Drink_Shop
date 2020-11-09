import React from "react";
import ListDrinks from "../Commponents/ListDrinks";

function Home({ cocktails, cocktailsLoad, searched, setShow }) {
  return (
    <div className="Home">
      <ListDrinks
        cocktails={cocktails}
        cocktailsLoad={cocktailsLoad}
        searched={searched}
        setShow={setShow}
      />
    </div>
  );
}

export default Home;
