import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const breadcrumbsItem = ({
  breadcrumbsitem,
  breadcrumbsitemLink,
  breadcrumbsitem2,
}) => {
  return (
    <Fragment>
      <b> / </b>
      <Link
        className={`${breadcrumbsitem ? "d-block px-3" : "d-none"} ${
          breadcrumbsitem2 ? "" : "lastBread"
        }`}
        to={breadcrumbsitemLink}
      >
        {breadcrumbsitem}
      </Link>
    </Fragment>
  );
};

export default breadcrumbsItem;
