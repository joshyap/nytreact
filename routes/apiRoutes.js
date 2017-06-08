var express = require("express");

var articlesController = require("../controllers/articlesController");

var router = new express.Router();

// Get all articles (or optionally a specific article with an id)
router.get("/api/:id?", articlesController.index);
router.get("/api/saved", articlesController.index);
// Create a new article using data passed in req.body
router.post("/articles", articlesController.create);
// Delete a specific article using the id in req.params.id
router.delete("/articles/:id", articlesController.destroy);

module.exports = router;


// * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
//
// * `/api/saved` (post) - your components will use this to save an article to the database
//
// * `/api/saved` (delete) - your components will use this to delete a saved article in the database
//
// * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
