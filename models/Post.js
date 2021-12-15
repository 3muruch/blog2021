const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
  author: String,
  text: String,
  date: { type: Date, default: Date.now}
});  
const PostSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  author: String,
  topic: String,
  title: String,
  const: String,
  comments:[CommentSchema]
});
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;