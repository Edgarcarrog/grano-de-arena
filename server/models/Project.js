const { model, Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    category: {
      type: String,
      //enum: ["Reciclaje", "Arte", "Tecnología"]
    },
    authorId:{
      type: Schema.Types.ObjectId,
      ref:"User"
    },
    activists: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    photoURL: {
      type: String, 
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0Hpv_u7DBhhSDtI0MAaSPwdC_aowXhAEMw9R-MiMm9VUrxoTN"
    }
    //date: String,
  }
);

module.exports = model("Project", projectSchema)
