import { getSingleProduct } from "@/app/actions/products/products";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import IdNotFound from "./not-found";

const SingleProduct = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  if (!product) {
    return <IdNotFound></IdNotFound>;
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-background">
        <Card className="max-w-4xl w-full overflow-hidden shadow-lg rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative h-96 w-full">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-l-2xl"
              />
            </div>

            {/* Info Section */}
            <CardContent className="flex flex-col justify-center p-6 space-y-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-2xl font-semibold text-primary">
                Price: ${product.price}
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleProduct;
