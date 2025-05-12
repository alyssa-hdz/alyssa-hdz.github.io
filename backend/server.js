const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const flashcardsRoutes = require('./routes/flashcards');
const categoriesRoutes = require('./routes/categories');

const app =express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', signupRoutes);
app.use('/api', loginRoutes);
app.use('/api', flashcardsRoutes);
app.use('/api', categoriesRoutes);

app.get('/', (req, res) => {
    res.send('CORS-enabled for all origins!');
  });
 
  const PORT = process.env.PORT || 3300;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });







// app.use('/api/user', userRoutes);
// app.use('/api/flashcards', flashcardsRoutes);
// app.use('/api/categories', categoriesRoutes);

//app.use('/api/signup', signupRoutes);

//app.listen(3300, () => console.log('Server is running on localhost:3000'));