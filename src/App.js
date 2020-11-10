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
function App() {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailsLoad, setCocktailsLoad] = useState(true);
  const [searched, setSearched] = useState("margarita");
  const searching=()=>{
Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searched}`).then((res)=>{
  setCocktails(res.data.drinks);
  setCocktailsLoad(false);
}).catch((err)=>console.log(err));
  }
  useEffect(() => {
    searching();
  }, [searched,]);
  return (
    <div className="App">
      <Navig  />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              cocktails={cocktails}
              cocktailsLoad={cocktailsLoad}
              searched={searched}
              setSearched={setSearched}
            />
          )}
        />
        <Route
          path="/List_of_Drinks/:id"
          render={(props) => (
            <SingleDrink
              {...props}
              cocktails={cocktails}
            />
          )}
        />
        <Route path="/About" component={About} />
        <Route path="*" render={() => <Errors />} />
      </Switch>
    </div>
  );
}

export default App;
