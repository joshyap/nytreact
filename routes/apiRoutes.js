var express = require("express");
var Article = require("../models/Article");
var mongoose = require("mongoose");
var router = express.Router();

// * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
// * `/api/saved` (post) - your components will use this to save an article to the database
// * `/api/saved` (delete) - your components will use this to delete a saved article in the database
// * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes

//get all saved articles
router.get("/api/saved", function(req, res){
  console.log("Getting all saved articles");
  Article.find({}, function(err, docs){
    if(err)
      return res.send(err);
    res.json(docs);
  });
});

// add saved article
router.post("/api/saved", function(req, res){
  console.log("Article saved");
  var newArticle = new Article({
    // title: req.body.title,
    // date: req.body.date,
    // url: req.body.url
    headline: req.body.headline,
    pubDate: req.body.pubDate,
    url: req.body.url,
    section: req.body.section,
    by: req.body.by
  });
  newArticle.save(function(err){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});

// delete saved article
router.delete("/api/saved", function(req, res){
  console.log("Removing article with id "+req.query.id);
  Article.findByIdAndRemove(req.query.id, function(err, doc){
    if(err)
      return res.send(err);
    res.sendStatus(204);
  });
});


module.exports = router;
