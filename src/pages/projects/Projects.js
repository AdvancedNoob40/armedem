import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout.js";

const Projects = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | Projelerimiz</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout>
        <h1>Projects</h1>
      </Layout>
    </Fragment>
  );
};

export default Projects;
