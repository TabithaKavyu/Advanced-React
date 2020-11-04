import React, { useState } from 'react';

const UseStateObject = () => {
  
  const [person, setPerson] = useState({
    name: "Tabitha",
    age: 21,
    message: 'I do not like this feeling'

  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'It needs to go away' });
  }
  
  
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
