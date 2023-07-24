import './TrickCard.css';
import React, { useEffect, useState } from "react";

const TrickCard = () => {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/tricks")
      .then((response) => response.json())
      .then((data) => setTricks(data))
      .catch((err) => console.error("Error: ", err));
  }, []);

  return (
    <div className='cards-container'>
      {tricks.map((trick) => (
        <div className='trick-card' key={trick.id}>
          <h2>{trick.name}</h2>
          <p>Stance: {trick.stance}</p>
          <p>Obstacle: {trick.obstacle}</p>
          <a href={trick.tutorial} className='trick-link'>Tutorial Link</a>
        </div>
      ))}
    </div>
  );
};

export default TrickCard;
