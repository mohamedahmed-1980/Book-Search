const router = require("express").Router();
const booksController = require("../../Controllers/BooksController");


// Matches with "/api/books"
router.route("/saved")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/saved/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
