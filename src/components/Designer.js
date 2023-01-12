import React from 'react';

export default function Editor({ setHead, setBody, setLeg, phrases, setPhrases }) {
  return (
    <div className="display">
      <div className="form">
        <select onChange={(e) => setHead(e.target.value)}>
          <option value="placeholder">placeholder</option>
        </select>
        <label>Head</label>
      </div>
      <div className="form">
        <select onChange={(e) => setBody(e.target.value)}>
          <option value="placeholder">placeholder</option>
        </select>
        <label>Body</label>
      </div>
      <div className="form">
        <select onChange={(e) => setLeg(e.target.value)}>
          <option value="placeholder">placeholder</option>
        </select>
        <label>Legs</label>
      </div>
      <div className="form">
        <input
          name="catchphrase"
          type="text"
          onChange={(e) => setPhrases([...phrases].push(e.target.value))}
        />
        <label>catchphrase input</label>
      </div>
    </div>
  );
}
