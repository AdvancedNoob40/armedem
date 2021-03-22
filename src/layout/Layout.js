import React, { Fragment } from "react";

import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
