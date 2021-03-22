import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout.js";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | İletişim</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout>
        <h1>Contact</h1>
      </Layout>
    </Fragment>
  );
};

export default Contact;
