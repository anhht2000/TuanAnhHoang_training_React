import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppProvider from "./contextAPI/AppProvider";
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
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  );
}

export default App;
