import React from 'react';
import { useState } from 'react';

export default function Desginer({ setHead, setBody, setLeg, phrases, setPhrases }) {
  const [text, setText] = useState('');
  const handler = () => {
    const arr = [...phrases];
    arr.push(text);
    return arr;
  };

  return (
    <div className="display">
      <div className="form">
        <select onChange={(e) => setHead(e.target.value)}>
          <option value="bird">bird</option>
          <option value="dog">dog</option>
          <option value="duck">duck</option>
          <option value="horse">horse</option>
        </select>
        <label>Head</label>
      </div>
      <div className="form">
        <select onChange={(e) => setBody(e.target.value)}>
          <option value="blue">blue</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
          <option value="dress">dress</option>
        </select>
        <label>Body</label>
      </div>
      <div className="form">
        <select onChange={(e) => setLeg(e.target.value)}>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="dog">dog</option>
          <option value="leg">leg</option>
        </select>
        <label>Legs</label>
      </div>
      <div className="form">
        <input name="catchphrase" type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit" onClick={() => setPhrases(handler())}>
          Submit
        </button>
        <label>catchphrase input</label>
      </div>
    </div>
  );
}
