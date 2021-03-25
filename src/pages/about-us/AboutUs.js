import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout.js";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.js";

const AboutUs = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | Hakkımızda</title>
        <meta name="description" content="Ardenem | Anasayfa" />
      </MetaTags>
      <Layout>
        <div className="section-bg behind-nav"></div>
        <Breadcrumbs
          breadcrumbsitem="Hakkımızda"
          breadcrumbsitemLink="hakkimizda"
        />
        <section className="section-bg">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-white">HAKKIMIZDA</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  incidunt, provident itaque labore eveniet perspiciatis
                  deserunt ullam numquam, odio deleniti ad doloribus aliquid
                  cumque. Dolorum perferendis voluptatibus hic magni est
                  deserunt quisquam deleniti aliquid! Ab excepturi assumenda
                  consequuntur maxime, nesciunt maiores doloribus porro impedit
                  aliquam delectus soluta enim aperiam error quia debitis fugiat
                  distinctio. Ea quae soluta porro mollitia officia neque
                  fugiat, inventore obcaecati eos et officiis cumque doloribus
                  dignissimos, rem, nobis praesentium maxime magni beatae sunt
                  at! Sint eveniet nemo, in quisquam magni aliquid
                  exercitationem fugit laboriosam odio. Maiores, fugiat
                  accusantium inventore facere adipisci error commodi accusamus
                  cupiditate rerum?
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="https://via.placeholder.com/500x400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default AboutUs;
