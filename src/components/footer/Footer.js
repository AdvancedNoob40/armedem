import React from "react";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className="py-100">
        <div className={Styles.cont + " container"}>
          <div className="row">
            <div className="col-md-6">
              <p className={Styles.address}>
                Karadolap Mahallesi <br />
                Gaziosmanpaşa Caddesi <br />
                no: 120 / E <br />
                EYÜPSULTAN / İSTANBUL
              </p>
            </div>
            <div className="col-md-6">
              <a className={Styles.sahibinden + " w-100 d-block pb-4"} href="/">
                sahibinden.com/armedeminsaat
              </a>
              <a className={Styles.mail + " w-100 d-block pb-4"} href="/">
                info@armedem.com.tr
              </a>
              <a className={Styles.tel + " w-100 d-block b-4"} href="/">
                0532 257 15 83
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
