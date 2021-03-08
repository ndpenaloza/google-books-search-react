const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true},
  image: { type: String, required: true},
  link: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Books = mongoose.model("Books", books);

module.exports = Books;
