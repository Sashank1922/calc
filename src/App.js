import React, { useState } from 'react';
import './App.css'; 

import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState('');
  const [count,setCount] = useState('0');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };
  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
      setCount('5');
    } catch (err) {
      setInput('Error');
    }
  };
  
 const fname = "Sashank";
 const lname = "Reddy";
 const age = 21;
 const date = new Date().getFullYear();


  return (
    <div className="calculator">

      <h1>Hello! My name is {fname+" "+lname}</h1>
      <p>My age is {age}</p>
      <p>copy right {date}</p>
      <h1>React Calculator</h1>
      <p>{count}</p>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('.')}>.</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>

        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
