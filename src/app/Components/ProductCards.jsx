"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductCards({ featureProducts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {featureProducts.map((product) => (
        <div
          key={product._id}
          className="rounded-2xl shadow-md overflow-hidden border bg-card text-card-foreground"
        >
          <div className="relative h-48 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
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
  );
}
