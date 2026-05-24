const express = require("express");
const Project = require("../models/Project");

const router = express.Router();


// Create Project
router.post("/", async (req, res) => {

  try {

    const project = await Project.create(req.body);

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});


// Get All Projects
router.get("/", async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;