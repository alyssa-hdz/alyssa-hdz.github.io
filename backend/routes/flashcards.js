const express = require('express');
const router = express.Router();
const { insertFlashcard } = require('../models/flashcards');
const db = require('../dbUtli');
/*

router.get('/flashcards/categories', (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});*/

/*
router.get('/flashcards/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  console.log("flashcard data", categoryId);
  db.query('SELECT * FROM flashcards WHERE category_id = ?', [categoryId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    console.log(results);
    res.status(200).json(results);
  });
});*/
router.get('/flashcards/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  console.log("flashcard data:", categoryId);

  try {
    const [results] = await db.query('SELECT * FROM flashcards WHERE category_id = ?', [categoryId]);
    res.status(200).json(results);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database error' });
  }
});


router.post('/flashcards', async(req, res) => {
  const flashcard = req.body;
  await insertFlashcard(flashcard, (err, insertId) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to insert flashcard' });
    }
    res.status(201).json({ message: 'Flashcard inserted', id: insertId });
  });
});

module.exports = router;