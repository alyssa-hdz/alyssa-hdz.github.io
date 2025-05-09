import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Categories(){
    const [categories,setCategories] =useState([]);
    const [error,setError] =useState ("");
    const navigate =useNavigate();

    useEffect (()=>{
      const fetchCategories = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/categories");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const text = await response.text();
          try {
            const data = JSON.parse(text);
            setCategories(data);
          } catch (jsonError) {
            throw new Error("Failed to parse JSON");
          }
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchCategories();
    }, []);
  
    const handleCategoryClick = (categoryId) => {
      navigate(`/flashcards/${categoryId}`);
    };
  
    return (
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