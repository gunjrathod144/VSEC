
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient("mongodb://127.0.0.1:27017");

let bookings;
let users;

// HOME
app.get("/", (req, res) => {
  res.send("GR Airways is running");
});

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Enter username and password"
      });
    }

    const oldUser = await users.findOne({ username });

    if (oldUser) {
      return res.status(400).json({
        success: false,
        message: "Username already exists. Please login."
      });
    }

    await users.insertOne({ username, password });

    res.status(201).json({
      success: true,
      message: "Signup successful! Please login."
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Signup failed. Please try again."
    });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await users.findOne({ username, password });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password"
      });
    }

    res.json({
      success: true,
      message: "Login successful"
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed. Please try again."
    });
  }
});

// CREATE BOOKING
app.post("/bookings", async (req, res) => {
  try {
    const {
      passengerName,
      email,
      from,
      to,
      travelDate,
      flightNumber,
      passengers
    } = req.body;

    if (
      !passengerName ||
      !email ||
      !from ||
      !to ||
      !travelDate ||
      !flightNumber
    ) {
      return res.status(400).json({
        message: "Fill all details"
      });
    }

    if (from === to) {
      return res.status(400).json({
        message: "Choose different cities"
      });
    }

    const booking = {
      passengerName,
      email,
      from,
      to,
      travelDate,
      flightNumber,
      passengers: Number(passengers) || 1
    };

    const result = await bookings.insertOne(booking);

    res.status(201).json({
      message: "Flight booked successfully",
      _id: result.insertedId
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({
      message: "Could not create booking"
    });
  }
});

// READ ALL BOOKINGS
app.get("/bookings", async (req, res) => {
  try {
    const list = await bookings.find().toArray();
    res.json(list);
  } catch (error) {
    res.status(500).json({
      message: "Could not load bookings"
    });
  }
});

// UPDATE BOOKING
app.put("/bookings/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid booking ID"
      });
    }

    const result = await bookings.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: "Booking updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not update booking"
    });
  }
});

// CANCEL BOOKING
app.delete("/bookings/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        message: "Invalid booking ID"
      });
    }

    const result = await bookings.deleteOne({
      _id: new ObjectId(req.params.id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: "Booking cancelled successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not cancel booking"
    });
  }
});

// START SERVER
async function start() {
  try {
    await client.connect();

    const db = client.db("grairways");
    bookings = db.collection("bookings");
    users = db.collection("users");

    app.listen(3000, () => {
      console.log("MongoDB connected successfully");
      console.log("GR Airways running at http://localhost:3000");
    });
  } catch (error) {
    console.error("Server could not start:", error);
  }
}

start();
