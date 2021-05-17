const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", async (req, res) => {
  const proyects = await Task.find();
  res.render("index.html", { title: "Inicio", proyects });
});

router.get("/about", (req, res) => {
  res.render("about.html", { title: "Sobre Mi" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "Contact Page" });
});

router.get("/projects", (req, res) => {
  res.render("projects.html", { title: "Proyectos" });
});

module.exports = router;
