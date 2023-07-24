import React, { useState } from 'react';

const TrickForm = ({ onNewTrick }) => {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTrick({ stance, name, obstacle, tutorial });
    setStance('');
    setName('');
    setObstacle('');
    setTutorial('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select value={stance} onChange={(e) => setStance(e.target.value)}>
          <option value="">Select a stance</option>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>
      </label>

      <label>
        <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        <select value={obstacle} onChange={(e) => setObstacle(e.target.value)}>
          <option value="">Select an obstacle</option>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>
      </label>

      <label>
        <input placeholder='Tutorial'type="text" value={tutorial} onChange={(e) => setTutorial(e.target.value)} />
      </label>

      <button type="submit">SEND IT</button>
    </form>
  );
};

export default TrickForm;
