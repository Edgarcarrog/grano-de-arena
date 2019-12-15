const Project = require ("../models/Project");
const User = require("../models/User")

//crear proyecto

exports.createProject = async (req, res, next) => {
  const project = await Project.create(
    { ...req.body }
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ project })
}


