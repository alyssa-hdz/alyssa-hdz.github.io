const db = require('../dbUtli');

const Categories = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (name) => {
    const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
    return result.insertId;
  },

  update: async (id, name) => {
    await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
  },

  delete: async (id) => {
    await db.query('DELETE FROM categories WHERE id = ?', [id]);
  }
};

module.exports = Categories;