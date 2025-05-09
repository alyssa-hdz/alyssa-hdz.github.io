import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './flashcards.css'
import {Card,Button} from 'react-bootstrap';

export default function Flashcards() {
    const { categoryId } = useParams();
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3300/api/flashcards/${categoryId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch flashcards");
                }
                return res.json();
            })
            .then((data) => {
             
                const initialized = data.map(card => ({ ...card, flipped: false }));
                setFlashcards(initialized);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [categoryId]);

    const handleFlip = (index) => {
        const updatedFlashcards = [...flashcards];
        updatedFlashcards[index].flipped = !updatedFlashcards[index].flipped;
        setFlashcards(updatedFlashcards);
    };

    return (
        <div className="flashcard-container">
            <h2>Flashcards for Category {categoryId}</h2>
            {loading && <p>Loading flashcards...</p>}
            {error && !loading && <p className="error">{error}</p>}
            {flashcards.length === 0 && !loading && !error && (
                <p>No flashcards available for this category.</p>
            )}
            <div className="flashcards">
            {flashcards.map((flashcard, index) => (
          <Card key={flashcard.id} className="mb-3" onClick={() => handleFlip(index)}>
            <Card.Body>
              <Card.Title>{flashcard.question}</Card.Title>
              {flashcard.flipped ? (
                <Card.Text>{flashcard.answer}</Card.Text>
              ) : (
                <Button variant="primary">Flip</Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}