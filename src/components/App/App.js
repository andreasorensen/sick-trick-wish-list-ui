import './App.css';
import TrickCard from '../TrickCard/TrickCard';
import TrickForm from '../TrickForm/TrickForm';
import React, { useEffect, useState } from 'react';



function App() {

  const [tricks, setTricks] = useState([]);

  const handleNewTrick = (newTrick) => {
    const maxId = Math.max(...tricks.map(trick => trick.id))
    const newId = maxId + 1
    newTrick.id = newId
    setTricks([...tricks, newTrick]);
  };

  // If I add POST I will have to change this handleNewTrick fn. 

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/tricks")
      .then((response) => response.json())
      .then((data) => setTricks(data))
      .catch((err) => console.error("Error: ", err));
  }, []);

    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickForm onNewTrick={handleNewTrick} />
        <TrickCard tricks={tricks} />
        <div></div>
      </div>
    );
}

export default App; 
