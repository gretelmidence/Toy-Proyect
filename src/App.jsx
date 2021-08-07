import { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Products from "./containers/Products";
import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import ProductView from "./containers/ProductView";


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

        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
