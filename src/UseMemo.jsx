import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState(0); 
  const [input, setInput] = useState(0);
  const calculateSum = useMemo(() => {
    return number + input;
  }, [number, input]); 

  const handleNumberChange = (event) => {
    setNumber(parseInt(event.target.value));
  };

  const handleInputChange = (event) => {
    setInput(parseInt(event.target.value));
  };

  return (
    <div>
      <label htmlFor="">
        Input1:
        <input type="number" onChange={handleNumberChange} value={number} />
      </label>
      <label htmlFor="">
        Input2:
        <input type="number" onChange={handleInputChange} value={input} />
      </label>
      <h1>{calculateSum}</h1>
    </div>
  );
};

export default UseMemo;
