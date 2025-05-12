const db = require('../dbUtli');

    function insertFlashcard(flashcard, callback) {
      const { question, answer, category_id } = flashcard;
      const query = 'INSERT INTO flashcards (question, answer, category_id) VALUES (?, ?, ?)';
      db.query(query, [question, answer, category_id], (err, result) => {
        callback(err, result ? result.insertId : null);
      });
    }
    
    function getFlashcardsByCategory(categoryId, callback) {
      const query = 'SELECT * FROM flashcards WHERE category_id = ?';
      db.query(query, [categoryId], (err, results) => {
        callback(err, results);
      });
    }




