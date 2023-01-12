import React from 'react';
import { useState } from 'react';

import Designer from './Desginer.js';
import Display from './Display.js';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [leg, setLeg] = useState('');
  const [phrases, setPhrases] = useState('');

  return (
    <main>
      <Display head={head} body={body} leg={leg} phrases={phrases} />
      <Designer
        setHead={setHead}
        setBody={setBody}
        setLeg={setLeg}
        phrases={phrases}
        setPhrases={setPhrases}
      />
    </main>
  );
}
