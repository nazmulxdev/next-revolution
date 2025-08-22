import { getProducts } from "@/app/actions/products/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Revolution | Products",
};

const Products = async () => {
  let products = await getProducts();
  products = products.map((product) => ({
    ...product,
    _id: product?._id.toString(),
  }));
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto">
      <p className="font-bold text-4xl text-center my-4">Our All Products.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center m-2">
        {products.map((product) => (
          <div
            key={product._id}
            className="rounded-2xl shadow-md overflow-hidden border bg-card text-card-foreground"
          >
            <div className="relative h-48 w-full">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-muted-foreground mt-2">
                {product.description}
              </p>
              <p className="text-lg font-bold mt-4">${product.price}</p>
              <Link href={`/products/${product._id}`}>
                <Button className="mt-4 w-full" variant="default">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
