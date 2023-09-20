const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
}); 

// GET one event
router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

// CREATE a new event
router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  const savedEvent = await newEvent.save();
  res.json(savedEvent);
});

// UPDATE a specific event
router.patch('/:id', async (req, res) => {
  const updatedEvent = await Event.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(updatedEvent);
});

// DELETE a specific event
router.delete('/:id', async (req, res) => {
  const deletedEvent = await Event.deleteOne({ _id: req.params.id });
  res.json(deletedEvent);
});

module.exports = router;
