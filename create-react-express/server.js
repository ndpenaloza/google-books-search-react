// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/google-books-search',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> Super Fantastisch!! API server now on port ${PORT}!`);
});
