const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  local: {
    type: String,
    required: true
  },
  dataComp: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Event', EventSchema);