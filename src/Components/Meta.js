import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Helmet>
  );
};

Helmet.defaultProps = {
  title: "Welcome To ShopHunt",
  description: "We sell best product all time.",
  keyword: "electronics, buy electronics, cheap products",
};

export default Meta;
