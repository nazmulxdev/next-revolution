"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
export default function AddProductForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const productData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      imageUrl: formData.get("imageUrl"),
    };
    console.log("Product Submitted:", productData);
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!Please, try again",
        });
      } else {
        form.reset();

        Swal.fire({
          title: "Successful",
          text: "Product details added in the database successfully.",
          icon: "success",
          draggable: true,
        }).then(() => {
          router.push("/products");
        });
      }
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-md bg-card border">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Write short description..."
            required
          />
        </div>

        {/* Price */}
        <div>
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            placeholder="Enter price"
            required
          />
        </div>
        {/* product image */}
        <div>
          <Label htmlFor="image">Product Image URL</Label>
          <Input
            id="image"
            name="imageUrl"
            placeholder="Enter image url"
            required
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Add Product
        </Button>
      </form>
    </div>
  );
}
