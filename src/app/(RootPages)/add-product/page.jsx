import React from "react";
import AddProductForm from "./components/AddProductForm";
export const metadata = {
  title: "Revolution | Add Product",
};
const AddProduct = () => {
  return (
    <div className="mx-auto max-w-screen-2xl w-full min-h-screen">
      <p className="text-4xl font-bold text-primary text-center my-4">
        Add Your Desire Product
      </p>
      <AddProductForm></AddProductForm>
    </div>
  );
};

export default AddProduct;
