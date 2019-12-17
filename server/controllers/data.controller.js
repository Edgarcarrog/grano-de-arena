const Project = require("../models/Project");
//const User = require("../models/User")

//crear proyecto

exports.createProject = async (req, res) => {
  const { title, description, category, authorId } = req.body;

  const project = await Project.create(
    {
      title,
      description,
      category,
      authorId: authorId
    },
  req.body._id = ""
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ project })
}

exports.getProjects = async(req, res) => {
  const { _id } = req.body;
  const projects = await Project.find({authorId:_id});
  res.status(200).json({projects});
}

exports.allProjects = async(req, res) => {
  const { _id } = req.body;
  const projects = await Project.find({authorId:{$ne: _id}}).populate("authorId");
  res.status(200).json({projects});
}

exports.joinProject = async(req, res) => {
  const { _id } = req.body;
  const projects = await Project.find({authorId:{$ne: _id}});
  res.status(200).json({projects});
}