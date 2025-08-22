import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Link from "next/link";
import React from "react";

const IdNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="bg-muted rounded-full p-6 mb-6">
        <Ghost className="w-16 h-16 text-muted-foreground" />
      </div>

      <h1 className="text-4xl font-bold tracking-tight mb-2">
        Product Not Found
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-6">
        The product you’re looking for doesn’t exist or may have been removed.
      </p>

      <Link href="/products" passHref>
        <Button size="lg" className="rounded-full shadow-md">
          Back to Products
        </Button>
      </Link>
    </div>
  );
};

export default IdNotFound;
