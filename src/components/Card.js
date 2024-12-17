import React from 'react';

function Card({ data, children }) {

  const { name, email, number } = data;

  return (
    <div className="card">
      <h3>name: {name}</h3>
      <p>email: {email}</p>
      <p>number: {number}</p>
      { children }
    </div>
    );
  }

  export default Card;