import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
/* 
THINGS TO DO: 
  - change form implementation + validation using formik -> https://formik.org/docs/overview --> DONE!
  - how to handle submissions in React (using OnSubmit) --> DONE!
  - using {useState} to keep track of values --> REPLACED W FORMIK + DONE!
  - transferring data from form over to display cards --> DONE!
  - printing cards out on right side after form submission --> DONE!
  - adding edit and delete buttons --> IN PROGRESS
  - add UI using CSS for formatting --> DONE!

RESOURCES:
  - w3schools (CSS + bootstrap + SCSS, JS, maybe HTML references when necessary)

TOPICS:
  - constructors (js + java) --> DONE!
  - promises (js) IN PROGRESS --> look into async functions too
  - HTML events (js)
  - classes --> extension of constructor
  - learn more abt spread 

NOTES:
  - use debugger on vscode --> DONE!
  - other functions: find() (+ look into forEach())
  - play around w useState for immediate updates --> DONE!
  - add second form under card for editing values --> DONE!
    - allows for changing of multiple vals --> DONE!
  - 
*/

let currentId = 1;

function App() {
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [currCardValues, setCurrCardValues] = useState({ name: '', email: '', number: '' });

  const handleFormSubmit = (values) => {
    const newCard = { ...values, id: currentId };
    setCards([...cards, newCard]);
    currentId += 1;
  };

  const handleEditSubmit = (values) => {
    const updatedCards = cards.map(card =>
      card.id === editingCardId ? { ...card, ...values } : card 
    );
    setCards(updatedCards);
    setEditingCardId(null); 
  };

  const handleEditClick = (card) => {
    setEditingCardId(card.id);
    setCurrCardValues({ name: card.name, email: card.email, number: card.number });
  };

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      <div className="form_container">
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      <div className="card_container">
        {cards.map(card => (
          <div key={card.id}>
          <div className="card">
            {editingCardId === card.id ? (
              <div>
                <input
                  type="text"
                  value={currCardValues.name}
                  onChange={(e) => setCurrCardValues({ ...currCardValues, name: e.target.value })}
                />
                <input
                  type="email"
                  value={currCardValues.email}
                  onChange={(e) => setCurrCardValues({ ...currCardValues, email: e.target.value })}
                />
                <input
                  type="text"
                  value={currCardValues.number}
                  onChange={(e) => setCurrCardValues({ ...currCardValues, number: e.target.value })}
                />
                <button onClick={() => handleEditSubmit(currCardValues)}>submit</button>
              </div>
            ) : (
              <div>
                <h3>{card.name}</h3>
                <p>{card.email}</p>
                <p>{card.number}</p>
                <button onClick={() => handleEditClick(card)}>edit</button>
                <button onClick={() => handleDelete(card.id)}>delete</button>
              </div>
            )}
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
}

export default App;
