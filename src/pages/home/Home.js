import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout.js";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | Anasayfa</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout pushHeader="d-block">
        <div className="container-fluid p-0 hero_banner_wrapper">
          <div className="hero_banner">
            <div className="text_box w-100">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-6 text-right">
                    <h1 className="slogan">“Yaşam Başladı.”</h1>
                    <img
                      className="mb-4"
                      src="./images/hero-button.png"
                      alt=""
                    />
                    <span className="slogan2 ml-3">Armeden Park</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Home</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">asd</div>
            <div className="col-md-4">asd</div>
            <div className="col-md-4">asd</div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Home;
