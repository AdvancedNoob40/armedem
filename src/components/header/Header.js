import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Style from "./header.module.scss";
import $ from "jquery";

const Header = ({ pushHeader }) => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <Fragment>
      <div id="homeGapper" className={pushHeader ? pushHeader : "d-none"}></div>
      <nav id="nav">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="logo-wrapper">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="d-none menu-wrapper d-md-flex align-items-center">
              <NavLink
                activeClassName={Style.active}
                className={Style.nav_item + " py-2 mx-4"}
                to="/"
                exact={true}
              >
                ANASAYFA
              </NavLink>
              <NavLink
                activeClassName={Style.active}
                className={Style.nav_item + " py-2 mx-4"}
                to="/hakkimizda"
              >
                HAKKIMIZDA
              </NavLink>
              <NavLink
                activeClassName={Style.active}
                className={Style.nav_item + " py-2 mx-4"}
                to="/projelerimiz"
              >
                PROJELERİMİZ
              </NavLink>
              <NavLink
                activeClassName={Style.active}
                className={Style.nav_item + " py-2 mx-4"}
                to="/iletisim"
              >
                İLETİŞİM
              </NavLink>
            </div>
            <div className={Style.mobileMenu + " d-block d-md-none"}>
              <a
                onClick={() => setIsActive(!isActive)}
                className={Style.hamburgerIcon}
                href="#"
              >
                <svg
                  height="384pt"
                  viewBox="0 -53 384 384"
                  width="384pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                  <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                  <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
              </a>
              <div
                className={`${Style.openable} ${isActive ? Style.active : ""}`}
              >
                <ul>
                  <li>
                    <NavLink
                      activeClassName={Style.active}
                      className={Style.nav_item + " py-2 mx-4"}
                      to="/"
                      exact={true}
                    >
                      ANASAYFA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName={Style.active}
                      className={Style.nav_item + " py-2 mx-4"}
                      to="/hakkimizda"
                    >
                      HAKKIMIZDA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName={Style.active}
                      className={Style.nav_item + " py-2 mx-4"}
                      to="/projelerimiz"
                    >
                      PROJELERİMİZ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName={Style.active}
                      className={Style.nav_item + " py-2 mx-4"}
                      to="/iletisim"
                    >
                      İLETİŞİM
                    </NavLink>
                  </li>
                </ul>
                <span onClick={() => setIsActive(!isActive)}>X</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
