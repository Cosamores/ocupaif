const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  evento: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
