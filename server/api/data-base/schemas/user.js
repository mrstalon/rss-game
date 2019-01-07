import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  score: Number
})

export default mongoose.model('User', userSchema)