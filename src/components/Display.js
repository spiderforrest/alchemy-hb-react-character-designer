import React from 'react';

export default function Display({ head, body, leg, phrases }) {
  return (
    <div className="diplay">
      <img className="head" src={`images/${head}-head.png`}></img>
      <img className="body" src={`images/${body}-middle.png`}></img>
      <img className="leg" src={`images/${leg}-pants.png`}></img>
      <p className="phrases">
        {phrases.map(function(text, index) {
          return <p key={index}>{text}</p>;
        })}
      </p>
    </div>
  );
}
