// // import React from 'react';
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import './App.css';
// import Login from "./Login";
// import Signup from "./Signup";
// import Categories from "./Categories";
// import Flashcards from "./Flashcards"
// import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
//   return (
//  <Router>
//   <div className= "App">
//     <Routes>
//       <Route path = "/" element ={<h1>Study App</h1>}></Route>
//       <Route path = "/login" element={<Login/>}/>
//       <Route path = "/signup" element={<Signup/>}/>
//       <Route path = "/categories" element={<Categories/>}/>
//       <Route path = "/category/:id" element={<Flashcards/>}/>

//     </Routes>
//   </div>
//  </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Categories from './Categories';
import Flashcards from './Flashcards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand navbar-light bg-light px-3">
          <Link className="navbar-brand" to="/">Study App</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/signup">Signup</Link>
            <Link className="nav-link" to="/categories">Categories</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1 className="text-center mt-4">Welcome to Study App</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:id" element={<Flashcards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;