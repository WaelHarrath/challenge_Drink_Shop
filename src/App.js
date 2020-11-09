import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navig from "./Commponents/Navig";
import Home from "./Pages/Home";
import SingleDrink from "./Pages/SingleDrink";
import Errors from "./Pages/Errors";
import About from "./Pages/About";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import SearchForm from "./Commponents/SearchForm";
function App() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailsLoad, setCocktailsLoad] = useState(true);
  const [searched, setSearched] = useState("");
  const [show, setShow] = useState(true);
  const getCocktail = () => {
    Axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    )
      .then((res) => {
        setCocktails(res.data.drinks);
        setCocktailsLoad(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCocktail();
  }, []);
  console.log(cocktails);
  console.log(cocktailsLoad);
  return (
    <div className="App">
      <Navig setShow={setShow} />
      {show ? <SearchForm setSearched={setSearched} /> : ""}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              cocktails={cocktails}
              cocktailsLoad={cocktailsLoad}
              searched={searched}
              setShow={setShow}
            />
          )}
        />
        <Route
          path="/List_of_Drinks/:id"
          render={(props) => (
            <SingleDrink
              {...props}
              cocktails={cocktails}
              setSearched={setSearched}
              setShow={setShow}
            />
          )}
        />
        <Route path="/About" component={About} />
        <Route path="*" render={() => <Errors setShow={setShow} />} />
      </Switch>
    </div>
  );
}

export default App;
