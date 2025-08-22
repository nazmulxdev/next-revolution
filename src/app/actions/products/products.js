import clientPromise from "@/lib/db.connect.mjs";
import { ObjectId } from "mongodb";

export async function getProducts() {
  const client = await clientPromise;
  return client.db("next-revolution").collection("products").find().toArray();
}

export async function getSingleProduct(id) {
  if (!id || !ObjectId.isValid(id)) {
    return null;
  }
  const client = await clientPromise;
  const product = await client
    .db("next-revolution")
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (product) product._id = product._id.toString();

  return product;
}
export async function getFeatureProducts() {
  const client = await clientPromise;
  return client
    .db("next-revolution")
    .collection("products")
    .find()
    .limit(6)
    .toArray();
}

export async function postProducts(productData) {
  const client = await clientPromise;
  return client.db("next-revolution").insertOne(productData);
}
