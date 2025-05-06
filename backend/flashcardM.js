const connection = require('../db/final_project');

function insertFlashcard(flashcard, callback) {
  const sql = 'INSERT INTO flashcards (question, answer, category_id) VALUES (?, ?, ?)';
  const values = [flashcard.question, flashcard.answer, flashcard.category_id];

  connection.execute(sql, values, (err, results) => {
    if (err) return callback(err);
    callback(null, results.insertId);
  });
}

module.exports = { insertFlashcard };const connection = require('../db/connection');

// Insert a new flashcard
function insertFlashcard(flashcard, callback) {
  const sql = 'INSERT INTO flashcards (question, answer, category_id) VALUES (?, ?, ?)';
  const values = [flashcard.question, flashcard.answer, flashcard.category_id];

  connection.execute(sql, values, (err, results) => {
    if (err) return callback(err);
    callback(null, results.insertId);
  });
}


function getFlashcardsByCategory(categoryId, callback) {
  const sql = 'SELECT * FROM flashcards WHERE category_id = ?';
  connection.execute(sql, [categoryId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

module.exports = {
  insertFlashcard,
  getFlashcardsByCategory,
};




