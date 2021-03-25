import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const breadcrumbsItem2 = ({ breadcrumbsitem2, breadcrumbsitem2Link }) => {
  return (
    <Fragment>
      <b> / </b>{" "}
      <Link
        className={breadcrumbsitem2 ? "d-block lastBread" : "d-none" + " ml-3"}
        to={breadcrumbsitem2Link}
      >
        {breadcrumbsitem2}
      </Link>
    </Fragment>
  );
};

export default breadcrumbsItem2;
