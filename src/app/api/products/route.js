import clientPromise from "@/lib/db.connect.mjs";

export async function POST(req) {
  try {
    const productData = await req.json();
    const client = await clientPromise;
    const db = client.db("next-revolution");
    const result = await db.collection("products").insertOne(productData);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Failed to add product details in the database.${error}`,
      }),
      { status: 500 },
    );
  }
}
