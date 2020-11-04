import React, { useState } from 'react';

const UseStateObject = () => {
  
  const [person, setPerson] = useState({
    name: "Tabitha",
    age: 21,
    message: 'I do not like this feeling'

  });

  const [name, setName] = useState('Tabitha');
  const [age, setAge] = useState('21');
  
  const [message, setMessage] = useState('Vibration DML');
  

  const changeMessage = () => {
    //setPerson({ ...person, message: 'It needs to go away' });
    setName('Tabby')
  }
  
  
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
