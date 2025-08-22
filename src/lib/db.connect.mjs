import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



// declared database collection


let usersCollection;


const connectDB = async () => {
  try {
    const dataBase = client.db("My-House");
    
    usersCollection = dataBase.collection("users");
    agreementsCollection = dataBase.collection("agreements");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export {
 
  connectDB,
  usersCollection,
};
