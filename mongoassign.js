const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {

    await client.connect();
    console.log("MongoDB Connected");

    // Database
    const db = client.db("collegeDB");

    // Collection
    const students = db.collection("students");

    // CREATE
    await students.insertOne({
        name: "Rahul",
        age: 20,
        course: "BCA"
    });
    console.log("Data inserted");

    // READ
    const data = await students.findOne({ name: "Rahul" });
    console.log("Data:", data);

    // UPDATE
    await students.updateOne(
        { name: "Rahul" },
        { $set: { age: 21 } }
    );
    console.log("Data updated");

    // DELETE
    await students.deleteOne({ name: "Rahul" });
    console.log("Data deleted");

    // Close connection
    await client.close();
}

main();