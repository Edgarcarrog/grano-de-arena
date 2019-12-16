const Project = require("../models/Project");
//const User = require("../models/User")

//crear proyecto

exports.createProject = async (req, res) => {
  const { title, description, category } = req.body;
  const { _id } = req.user;

  const project = await Project.create(
    {
      title,
      description,
      category,
      authorId: _id
    },
  req.body._id = ""
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ project })
}

exports.getProjects = async(req, res) => {
  const projects = await Project.find();
  res.status(200).json({projects});
  // const { _id } = await req.body.user;
  //const projects = await Project.find({authorId:_id});
}