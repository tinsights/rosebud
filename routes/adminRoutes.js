const router = require("express").Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
