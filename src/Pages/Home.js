import React from "react";
import ListDrinks from "../Commponents/ListDrinks";
import SearchForm from "../Commponents/SearchForm";

function Home({ cocktails, cocktailsLoad, searched,setSearched }) {
  return (
    <div className="Home">
          <SearchForm  setSearched={setSearched} />
      <ListDrinks
        cocktails={cocktails}
        cocktailsLoad={cocktailsLoad}
        searched={searched}
      />
    </div>
  );
}

export default Home;
