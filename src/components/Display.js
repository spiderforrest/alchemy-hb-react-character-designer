import React from 'react';

export default function Display({ head, body, leg, phrases }) {
  return (
    <div className="diplay">
      <img className="head" src={`images/${head}.png`}></img>
      <img className="body" src={`images/${body}.png`}></img>
      <img className="leg" src={`images/${leg}.png`}></img>
      <p className="phrases">{phrases}</p>
    </div>
  );
}
