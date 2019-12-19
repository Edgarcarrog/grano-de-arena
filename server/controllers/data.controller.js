const Project = require("../models/Project");
const Comment = require("../models/Comment")

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

exports.createComment = async (req, res) => {
  const { description, rate, authorId} = req.body;

  const comment = await Comment.create(
    {
      description,
      rate,
      authorId: authorId
    },
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ comment })
}

exports.getProjects = async(req, res) => {
  const { _id } = req.body;
  const projects = await Project.find({authorId:_id});
  res.status(200).json({projects});
}

exports.allProjects = async(req, res) => {
  const { _id } = req.body;
  const projects = await Project.find({ $and: [ {authorId:{$ne: _id}}, { activists: {$ne: _id}} ]}).populate("authorId");
  res.status(200).json({projects});
}

exports.joinProject = async(req, res) => {
  const {id} = req.body;
  const { _id } = req.user;

  const project = await Project.findByIdAndUpdate(
    id, {$push: {"activists": _id}},
    req.body._id = ""
  ).catch(err => res.status(500).json({ err }))
  return res.status(201).json({ project })
}

exports.joinedProjects = async(req, res) => {
  const { _id } = req.body;
  const projects = await Project.find( { activists: _id } );
  res.status(200).json({projects});
}



