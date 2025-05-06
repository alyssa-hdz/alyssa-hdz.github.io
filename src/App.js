import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from "./Login";
import Signup from "./Signup";
import Categories from "./Categories";
import Flashcards from "./Flashcards"




function App() {
  return (
 <Router>
  <div className= "App">
    <Routes>
      <Route path = "/" element ={<h1>Study App</h1>}></Route>
      <Route path = "/login" element={<Login/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/categories" element={<Categories/>}/>
      <Route path = "/category/:id" element={<Flashcards/>}/>

    </Routes>
  </div>
 </Router>
  );
}

export default App;
