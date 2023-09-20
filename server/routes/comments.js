const express = require('express');
const Comment = require('./models/Comment');

const router = express.Router();

// GET all comments
router.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

// GET one comment
router.get('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  res.json(comment);
});

// CREATE a new comment
router.post('/', async (req, res) => {
  const newComment = new Comment(req.body);
  const savedComment = await newComment.save();
  res.json(savedComment);
});

// UPDATE a specific comment
router.patch('/:id', async (req, res) => {
  const updatedComment = await Comment.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(updatedComment);
});

// DELETE a specific comment
router.delete('/:id', async (req, res) => {
  const deletedComment = await Comment.deleteOne({ _id: req.params.id });
  res.json(deletedComment);
});

module.exports = router;
