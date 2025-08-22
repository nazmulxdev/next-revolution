import React from "react";
import { getFeatureProducts } from "../actions/products/products";
import ProductCards from "./ProductCards";

const FeatureProducts = async () => {
  let featureProducts = await getFeatureProducts();
  featureProducts = featureProducts.map((product) => ({
    ...product,
    _id: product?._id.toString(),
  }));
  
  return (
    <div className="max-w-screen-2xl mx-auto">
      <ProductCards featureProducts={featureProducts}></ProductCards>
    </div>
  );
};

export default FeatureProducts;
