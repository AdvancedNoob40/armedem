import React, { Fragment } from "react";

import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";

const Layout = ({ children, pushHeader, zMinus }) => {
  return (
    <Fragment>
      <Header pushHeader={pushHeader} zMinus={zMinus} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
