import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout.js";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.js";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | İletişim</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout>
        <div className="section-bg behind-nav"></div>
        <Breadcrumbs
          breadcrumbsitem="İletişim"
          breadcrumbsitemLink="iletisim"
        />
        <section className="section-bg">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <h1 className="text-white">İletişim</h1>
                <p className="text-white">
                  ADRES: <br /> Karadolap Mahallesi <br />
                  Gaziosmanpaia Caddesi <br /> No: 120 / E <br /> EYÜPSULTAN -
                  İSTANBUL{" "}
                </p>
                <p>
                  TELEFON: <br /> 532 257 15 83
                </p>
              </div>
              <div className="col-md-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9057852107794!2d28.934170315730217!3d41.07105202350777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0db4e9d6b91%3A0x24b228eb2dd5af57!2sKaradolap%2C%20Gazi%20Osmanpa%C5%9Fa%20Cd%20120%20E%2C%2034065%20Ey%C3%BCpsultan%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1616655456927!5m2!1str!2str"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Contact;
