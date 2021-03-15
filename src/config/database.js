const mongoose = require("mongoose");

// you can configure dotenv in one place it will work properly every file do not need to configure dotenv
require("dotenv").config();

const db = process.env.DB_URL || "mongodb://localhost:27017/fakebooker";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process on failure
    process.exit(1);
  }
};

module.exports = connectDB;
