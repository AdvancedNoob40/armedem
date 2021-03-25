import React from "react";
import { Link } from "react-router-dom";
import BreadcrumbsItem from "./breadcrumbsItem";
import BreadcrumbsItem2 from "./breadcrumbsItem2";
import Style from "./breadcrumbs.module.scss";

const breadcrumbs = ({
  breadcrumbsitem,
  breadcrumbsitem2,
  breadcrumbsitemLink,
  breadcrumbsitem2Link,
}) => {
  return (
    <section className="section-bg">
      <div className={"container pt-4 " + Style.breadC}>
        <div className="row">
          <div className="col-12 d-flex text-white">
            <Link className="px-3" exact to="/">
              Anasayfa
            </Link>
            <BreadcrumbsItem
              breadcrumbsitem={breadcrumbsitem}
              breadcrumbsitemLink={breadcrumbsitemLink}
            />
            <BreadcrumbsItem2
              breadcrumbsitem2={breadcrumbsitem2}
              breadcrumbsitem2Link={breadcrumbsitem2Link}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default breadcrumbs;
