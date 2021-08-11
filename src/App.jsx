import { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import ProductView from "./components/ProductView";
import Basket from "./components/Basket";

function App() {
  const [user, setUser] = useState(null);
  const [toggleForm, setToggleForm] = useState(true);

  const formMode = () => {
    setToggleForm(!toggleForm);
  }

  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    //setuserinfo redux store
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);

  // const [basketData, setBasketData] = useState([]);


  return (
    <>
      
      <div className="App">
        <NavBar setUserState={() => setUser(null)}
        />
        <CssBaseline />
        <Switch>

          <Route exact path="/">
            {toggleForm && !user && (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()} />)}
            {!user && !toggleForm && (<SignUp toggle={() => formMode()} />)}
            {user && <Products />}

          </Route>

          <Route exact path="/product-view/:gameID">
            <ProductView />
          </Route>

          <Route exact path="/basket">
            <Basket />
          </Route>

        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
