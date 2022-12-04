import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Head from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes.jsx";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Head />
            {/* <Header {...props}/> */}

            <div className="main">
              
                <Routes />
              
            </div>

            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
