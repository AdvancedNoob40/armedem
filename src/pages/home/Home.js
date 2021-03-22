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
      <Layout>
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
