const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const userRoutes =require('./routes/login.js')
const userRoutes =require('./routes/user');
const flashcardsRoutes =require('./routes/flashcardsRoutes.js')



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/user',userRoutes);
app.use('/api/flashcards',flashcardsRoutes);
app.use('/api/user',userRoutes);
app.listen(3000,()=> console.log('Server is running on localhost 3000'));