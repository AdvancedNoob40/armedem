import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Style from "./header.module.scss";
import $ from "jquery";

const Header = ({ pushHeader }) => {
  const headerSticky = () => {
    var $navTop = $("#nav").scrollTop();
    console.log($navTop);
    /*  var nav = document.getElementById("nav");
    var navOffsetTop = nav.offsetTop;
    if (navOffsetTop < 0) {
      nav.style.top = 0;
    } else {
      nav.style.top = "calc(100vh - 170px)";
    } */
  };

  document.addEventListener("scroll", function (e) {
    headerSticky();
  });

  return (
    <Fragment>
      <div id="homeGapper" className={pushHeader ? pushHeader : "d-none"}></div>
      <nav id="nav">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="logo-wrapper">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="menu-wrapper d-flex align-items-center">
              <NavLink
                activeClassName="active"
                className={Style.nav_item + " py-2 mx-4"}
                to="/"
                exact={true}
              >
                ANASAYFA
              </NavLink>
              <NavLink
                activeClassName="active"
                className={Style.nav_item + " py-2 mx-4"}
                to="/hakkimizda"
              >
                HAKKIMIZDA
              </NavLink>
              <NavLink
                activeClassName="active"
                className={Style.nav_item + " py-2 mx-4"}
                to="/projelerimiz"
              >
                PROJELERİMİZ
              </NavLink>
              <NavLink
                activeClassName="active"
                className={Style.nav_item + " py-2 mx-4"}
                to="/iletisim"
              >
                İLETİŞİM
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
