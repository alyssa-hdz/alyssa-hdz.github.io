import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Categories(){
    const [categories,setCategories] =useState([]);
    const [error,setError] =useState ("");
    const navigate =useNavigate();

    useEffect (()=>{
        fetch ("http://localhost:3000/api/categories")
        .then((res)=>{
            if (!res.ok){
                throw new Error ("Failed to fetch categories");}
                return res.json();
             })
             .then((data)=> setCategories(data))
             .catch((err)=> setError(err.message));
    },[]);
    const handleCategoryClick = (categoryId) => {
        navigate (`/flashcards/${categoryId}`);
    };

    return(
        <div className="category-container">
      <h2>Categories</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} onClick={() => handleCategoryClick(cat.id)}>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
    );
}

