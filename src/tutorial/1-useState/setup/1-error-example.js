import React from 'react';

const ErrorExample = () => {
  let title = 'Terrific Tuesday';
  
  const handleClick = () => {
    title = "Pizza Day!";
    console.log(title);
  };
  
  
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type ='button' className='btn' onClick={handleClick}>Change title</button>
    </React.Fragment>
  )
};

export default ErrorExample;