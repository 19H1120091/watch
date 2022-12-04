import React from "react";

import "../css/App.css";
import "../css/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRouter from "../PrivateRouter";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import Male from "../pages/Male";
import Female from "../pages/Female";
import News from "../pages/News";
import Payment from "../pages/Payment";
import PlaceOrderScreen from "../pages/PlaceOrder";
import ProfileScreen from "../pages/Profile";
import OrderScreen from "../pages/OrderScreen";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search/:keyword"  component={Search} />
      <Route path="/catalog/:id" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRouter path="/checkout" component={Checkout} />
      <Route path="/male" component={Male} />
      <Route path="/female" component={Female} />
      <Route path="/news" component={News} />
      <PrivateRouter path="/payment" component={Payment} />
      <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
      <PrivateRouter path="/profile" component={ProfileScreen} />
      <PrivateRouter path="/order/:id?" component={OrderScreen} />
      
      
    </Switch>
  );
};

export default Routes;
