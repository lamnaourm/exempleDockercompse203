const express = require("express");
const mongoose = require("mongoose");
const directorModel = require("../models/DirectorSchema");

const routes = express.Router();

routes.get("/all", (req, res) => {
  directorModel.find({}, (err, actor) => {
    if (!err) res.json(actor);
    else res.status(510).json({ message: err });
  });
});

routes.get("/names", (req, res) => {
  directorModel.distinct("name", (err, director) => {
    if (!err) res.json(director);
    else res.status(510).json({ message: err });
  });
});

routes.post("/add", (req, res) => {
  const director = req.body;
  const newActor = new directorModel(director);
  newActor.save((err, actor) => {
    if (!err) res.status(201).json(director);
    else res.sendStatus(507);
  });
});

module.exports = routes;