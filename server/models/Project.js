const { model, Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Ciencia", "Arte", "Tecnología"]
    },
    authorId:{
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    studentId: {
      type: Schema.Types.ObjectId,
      ref:'User'
    },
    photoURL: {
      type: String, 
      default: "https://miro.medium.com/max/1200/1*jVnqkmLgnIbuVlFYl5-T_Q.png"
    },
    description: String,
    creditos: Number,
    date: String,
  }
);

module.exports = model("Project", projectSchema)
