import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import "./home.css";

import Layout from "../../layout/Layout.js";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | Anasayfa</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout pushHeader="d-block">
        <div className="container-fluid p-0 hero_banner_wrapper z__1">
          <div className="hero_banner">
            <div className="text_box w-100 position-fixed">
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
        <section className="bg-main">
          <div className="container bg-main py-100">
            <div className="row no-gutters hakkimizda-border">
              <div className="col-md-6">
                <img
                  className="w-100 hakkimizda-border"
                  src="./images/hakkimizda.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 ">
                <div className="hakkimizda-wrapper d-flex flex-column justify-content-center h-100">
                  <h1 className="text-white">HAKKIMIZDA</h1>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <a href="/hakkimizda" className="text-white">
                    <img src="./images/forward-button.png" alt="button" />
                    DAHA FAZLASI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-main">
          <div className="container">
            <div className="row">
              <div className="col-md-3 d-flex flex-column justify-content-between align-items-center">
                <img
                  className="w-50"
                  src="./images/quality.png"
                  alt="kaliteli yapılar"
                />
                <h3 className="info-text">KALİTELİ YAPILAR</h3>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-between align-items-center">
                <img
                  className="w-50"
                  src="./images/hand-shake.png"
                  alt="güvenilirlik"
                />
                <h3 className="info-text">GÜVENİLİRLİK</h3>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-between align-items-center">
                <img
                  className="w-50"
                  src="./images/modern-house.png"
                  alt="modern mimari"
                />
                <h3 className="info-text">MODERN MİMARİ</h3>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-between align-items-center">
                <img
                  className="w-50"
                  src="./images/home.png"
                  alt="müşteri memnuniyeti"
                />
                <h3 className="info-text">MÜŞTERİ MEMNUNİYETİ</h3>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Home;
