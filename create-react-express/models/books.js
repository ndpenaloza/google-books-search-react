const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
  bookID: { type: String, required: true},
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true},
  image: { type: String, required: true},
  link: { type: String, required: true},
});

const Books = mongoose.model("Books", books);

module.exports = Books;
