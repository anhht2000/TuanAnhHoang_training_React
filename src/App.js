import { useContext } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AppProvider, { AppContext } from "./contextAPI/AppProvider";
import DetailProduct from "./features/DetailProduct";
import Homepage from "./features/HomePage";
import ListProduct from "./features/ListProduct";

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path='/list-product' exact>
          <ListProduct />
        </Route>
        <Route path='/detail-product/:idProduct' exact>
          <DetailProduct />
        </Route>
        <Route path='/' exact>
          <Homepage />
        </Route>
      </Switch>
    </AppProvider>
  );
}

export default App;
