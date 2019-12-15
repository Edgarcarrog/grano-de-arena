const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: {
      type:String,
      required: true,
      unique: true,
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    photoURL: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAzg3kZqBWHn43X0jUVFFazBc4vtMzWufZAUOmqq3cmkNee9I5"
    },
    projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)