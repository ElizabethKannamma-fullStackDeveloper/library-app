const express = require("express");
const router = express.Router();
const Book = require("../Models/bookModel");

//POST: Add a new book
//api/books/

router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    book_count: req.body.book_count,
    author: req.body.author,
    link: req.body.link,
  });

  try {
    const saveBook = await book.save();
    res.send(saveBook);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET: Get all books
///api/books/

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET: Get book by id
///api/books/:id

router.get("/:id", async (req, res) => {
  try {
    const book= await Book.findById(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT: Update a book
//api/books/:id


router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE: Delete a book
//api/books/:id


router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
