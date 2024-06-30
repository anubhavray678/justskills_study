// utils/connect.js
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL; // Ensure you set this in your environment variables
const options = {};

let client;
let clientPromise;

if (!process.env.DATABASE_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "production") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
