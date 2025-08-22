import clientPromise from "@/lib/db.connect.mjs";

export async function getProducts() {
  const client = await clientPromise;
  return client.db("next-revolution").collection("products").find().toArray();
}
export async function getSingleProduct({ params }) {
  const client = await clientPromise;
  const { id } = await params;
  return client.db("next-revolution").collection("products").find().toArray();
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
