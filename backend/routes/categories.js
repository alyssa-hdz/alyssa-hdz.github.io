const express = require('express');
const router = express.Router();
const db = require('../dbUtli'); 

router.get('/categories', async (req, res) => {
    console.log("here I am");
    try {
        const [results] = await db.query('SELECT * FROM categories');
        res.status(200).json(results);
    } catch (err) {
        console.error('Database error:', err); 
        res.status(500).json({ error: 'Database error' });
    }
});


router.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid category ID' });
    }

    db.query('SELECT * FROM categories WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(results[0]);
    });
});

module.exports = router;