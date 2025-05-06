const express = require('express');
const router = express.Router();
const { insertFlashcard } = require('../models/flashcardModel');

router.post('/flashcards', (req, res) => {
  const flashcard = req.body;

  insertFlashcard(flashcard, (err, insertId) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to insert flashcard' });
    }
    res.status(201).json({ message: 'Flashcard inserted', id: insertId });
  });
});

router.get('/flashcards/:categoryId',(req,res)=>{
    const categoryId = req.params.categoryId;

    getFlashcardsByCategory(categoryId, (err, flashcards) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch flashcards' });
      }
      res.json(flashcards);
});
});
module.exports = router;