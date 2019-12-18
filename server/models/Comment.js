const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    description:{
      type: String,
      required: true
    },
    rate:{
      type: Number,
      required: true
    },
    authorId:{
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    }
  }
);

module.exports = model("Comment", commentSchema)
