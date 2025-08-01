require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ListingsModel = require("./models/ListingsModel");

const app = express();
app.use(cors());
app.use(express.json()); // Also good to parse JSON requests

// ✅ Use PORT from environment (Render requires this)
const PORT = process.env.PORT || 10000;
const url = process.env.MONGO_URL;

// ✅ Connect to MongoDB without deprecated options
mongoose
  .connect(url)
  .then(() => {
    console.log("✅ MongoDB connected");

    // ✅ Start server only after DB connection succeeds
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// ✅ Route to get all listings
app.get("/allListings", async (req, res) => {
  try {
    const allListings = await ListingsModel.find({});
    res.json(allListings);
  } catch (error) {
    console.error("❌ Failed to fetch listings:", error);
    res.status(500).send("Error fetching listings");
  }
});
