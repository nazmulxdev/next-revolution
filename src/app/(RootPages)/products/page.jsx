import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "mango",
      description: " Seasonal food",
    },
    {
      id: 2,
      title: "mango",
      description: " Seasonal food",
    },
    {
      id: 3,
      title: "mango",
      description: " Seasonal food",
    },
    {
      id: 4,
      title: "mango",
      description: " Seasonal food",
    },
  ];
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto">
      <p>this is add product.</p>
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        {products.map((product) => (
          <div key={product?.id}>
            <p>Id:{product.id}</p>
            <h1>{product.description}</h1>
            <Button>
              <Link href={`/products/${product.id}`}>Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
