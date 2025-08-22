import React from "react";

const SingleProduct = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <p>this is single product page.</p>
      <h1>Id : {id}</h1>
    </div>
  );
};

export default SingleProduct;
