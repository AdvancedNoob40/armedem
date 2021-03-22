import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout.js";

const AboutUs = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | Hakkımızda</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout>
        <h1>About Us</h1>
      </Layout>
    </Fragment>
  );
};

export default AboutUs;
