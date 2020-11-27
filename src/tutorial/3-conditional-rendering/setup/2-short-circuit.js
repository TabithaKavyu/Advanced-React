import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'Tabby Tabby'}</h1>;
      {text && <h1>Hello Tabby</h1>}
      {!text && <h1>Hello World</h1>}
    </>
  );
};

export default ShortCircuit;
