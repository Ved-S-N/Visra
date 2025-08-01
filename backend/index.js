require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ListingsModel = require("./models/ListingsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
app.use(cors()); // ✅ allow all origins

// Connect to MongoDB before starting the server
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ DB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });

app.get("/allListings", async (req, res) => {
  let allListings = await ListingsModel.find({});
  res.json(allListings);
});
// Route to add sample listings
// app.get("/addListings", async (req, res) => {
//   try {
//     const tempListings = [
//       {
//         title: "Valley of Flowers Trek",
//         description:
//           "A vibrant national park with alpine flowers, located in the Western Himalayas, perfect for nature lovers.",
//         location: "Uttarakhand, India",
//         imageUrl: "https://example.com/images/valley-of-flowers.jpg",
//         tags: ["mountains", "trek", "flora"],
//       },
//       {
//         title: "Rann of Kutch Festival",
//         description:
//           "Experience the cultural richness of Gujarat in this white desert festival full of color and traditions.",
//         location: "Kutch, Gujarat",
//         imageUrl: "https://example.com/images/rann-utsav.jpg",
//         tags: ["festival", "desert", "culture"],
//       },
//       {
//         title: "Tea Gardens of Munnar",
//         description:
//           "A peaceful getaway to rolling hills and lush green tea plantations in the Western Ghats.",
//         location: "Munnar, Kerala",
//         imageUrl: "https://example.com/images/munnar-tea.jpg",
//         tags: ["hills", "relaxation", "nature"],
//       },
//       {
//         title: "Sundarbans Mangrove Safari",
//         description:
//           "Venture into the world’s largest mangrove forest and spot the majestic Royal Bengal Tiger.",
//         location: "Sundarbans, West Bengal",
//         imageUrl: "https://example.com/images/sundarbans.jpg",
//         tags: ["wildlife", "forest", "adventure"],
//       },
//       {
//         title: "Spiti Valley Road Trip",
//         description:
//           "A thrilling road journey through barren landscapes, monasteries, and rugged beauty.",
//         location: "Spiti, Himachal Pradesh",
//         imageUrl: "https://example.com/images/spiti.jpg",
//         tags: ["roadtrip", "mountains", "remote"],
//       },
//       {
//         title: "Sikkim's Frozen Lakes",
//         description:
//           "Explore serene frozen lakes like Tsomgo and Gurudongmar during the winter chill.",
//         location: "Sikkim, India",
//         imageUrl: "https://example.com/images/sikkim-lake.jpg",
//         tags: ["snow", "lakes", "nature"],
//       },
//       {
//         title: "Khajuraho Temples",
//         description:
//           "Marvel at ancient temples known for their intricate sculptures and architectural beauty.",
//         location: "Khajuraho, Madhya Pradesh",
//         imageUrl: "https://example.com/images/khajuraho.jpg",
//         tags: ["history", "culture", "architecture"],
//       },
//       {
//         title: "Goa Beach Carnival",
//         description:
//           "A vibrant fusion of music, parades, and coastal fun during Goa’s iconic carnival season.",
//         location: "Goa, India",
//         imageUrl: "https://example.com/images/goa-carnival.jpg",
//         tags: ["beach", "festival", "party"],
//       },
//       {
//         title: "Ladakh’s Nubra Valley",
//         description:
//           "Visit a high-altitude cold desert with double-humped camels, monasteries, and Himalayan views.",
//         location: "Nubra Valley, Ladakh",
//         imageUrl: "https://example.com/images/nubra.jpg",
//         tags: ["desert", "mountains", "remote"],
//       },
//       {
//         title: "Coorg Coffee Trails",
//         description:
//           "Walk through lush coffee plantations and enjoy local delicacies in this green paradise.",
//         location: "Coorg, Karnataka",
//         imageUrl: "https://example.com/images/coorg.jpg",
//         tags: ["coffee", "hills", "nature"],
//       },
//     ];

//     // Save each listing to DB
//     for (const item of tempListings) {
//       const listing = new ListingsModel(item);
//       await listing.save();
//     }

//     res.status(200).send("✅ Listings added successfully!");
//   } catch (error) {
//     console.error("❌ Failed to add listings:", error);
//     res.status(500).send("❌ Failed to add listings. Check the server logs.");
//   }
// });
