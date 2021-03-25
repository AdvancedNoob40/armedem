import React, { Fragment, useState } from "react";
import Flickity from "react-flickity-component";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout";
import Style from "./projectDetails.module.scss";

const ProjectDetails = () => {
  const flickityOptions = {
    initialIndex: 0,
    contain: true,
  };

  const [disGorsel] = useState([
    { src: "/images/armedem_bina/dis-gorsel-1.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-2.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-3.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-1.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-2.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-3.jpg" },
  ]);
  const [icGorsel] = useState([
    { src: "/images/armedem_bina/dis-gorsel-3.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-2.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-1.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-3.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-2.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-1.jpg" },
  ]);
  const [tasarimGorsel] = useState([
    { src: "/images/armedem_bina/dis-gorsel-2.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-1.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-3.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-2.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-1.jpg" },
    { src: "/images/armedem_bina/dis-gorsel-3.jpg" },
  ]);
  return (
    <Fragment>
      <MetaTags>
        <title>Armedem | Armedem Apt</title>
        <meta name="description" content="Ardenem | Armedem Apt" />
      </MetaTags>
      <Layout>
        <div className="section-bg behind-nav"></div>
        <section className={Style.firstSection + " section-bg"}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <img
                  className="w-100"
                  src="https://via.placeholder.com/800x350"
                  alt=""
                />
              </div>
              <div className={"col-md-4 " + Style.kunye}>
                <h1>Ardenem Apt. Proje Künyesi</h1>
                <p>
                  Parsel Alanı: 68.731 m2 <br /> İnşaat Alanı: 205.000 m2 <br />{" "}
                  Proje Tipi: Konut-Residence-Çarşı <br /> 14 Blok - 428 konut,
                  571 residence, 95 Adet Ticaret Birimi <br /> Konum: Eyüp{" "}
                  <br /> Proje Başlangıç Tarihi: 30 Nisan 2021 <br /> Proje
                  Teslim Tarihi:2022 <br /> Armedem İnşaat’ın Eyüp Karadolap’ta
                  00 dönümlük arazisi üzerinde , İstanbul'un en şık ve iddialı
                  markalı konut projesi olarak 30 Nisan 2021'de satışa sunuldu.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-bg">
          <div className={Style.container + " container"}>
            <div className={"row " + Style.row}>
              <h2 className={Style.sectionTitle}>İÇ GÖRSELLER</h2>
              <Flickity
                className={"carousel " + Style.DisGorsel} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                {disGorsel.map((gorsel, key) => (
                  <div className={Style.imgWrapper} key={key}>
                    <img className="w-100" src={gorsel.src} alt="" />
                  </div>
                ))}
              </Flickity>
            </div>
          </div>
        </section>
        <section className="section-bg">
          <div className={Style.container + " container"}>
            <div className={"row " + Style.row}>
              <h2 className={Style.sectionTitle}>DIŞ GÖRSELLER</h2>
              <Flickity
                className={"carousel " + Style.DisGorsel} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                {icGorsel.map((gorsel, key) => (
                  <div className={Style.imgWrapper} key={key}>
                    <img className="w-100" src={gorsel.src} alt="" />
                  </div>
                ))}
              </Flickity>
            </div>
          </div>
        </section>
        <section className="section-bg">
          <div className={Style.container + " container"}>
            <div className={"row " + Style.row}>
              <h2 className={Style.sectionTitle}>KAT PLANLARI</h2>
              <Flickity
                className={"carousel " + Style.DisGorsel} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                {tasarimGorsel.map((gorsel, key) => (
                  <div className={Style.imgWrapper} key={key}>
                    <img className="w-100" src={gorsel.src} alt="" />
                  </div>
                ))}
              </Flickity>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default ProjectDetails;
