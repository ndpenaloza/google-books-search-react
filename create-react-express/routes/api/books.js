const router = require("express").Router();
const booksController = require("../../controller");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id")
  .delete(booksController.remove);

module.exports = router;
