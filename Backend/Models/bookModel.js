const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  book_count:Number,
  author: String,
  link: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
