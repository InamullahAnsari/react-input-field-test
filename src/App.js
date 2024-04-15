import React from 'react';
import { useState} from 'react';
import './style.css';

export default function App(){
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  return(
    <div>
      <label htmlFor="">User Name: </label>
      <input
        name="testValue"
        id="test"
        style={{ backgroundColor: text.length > 10 ? "red" : "lightgreen", border: '1px solid black', borderRadius: '5px' }}
        value= {text}
        onChange={handleChange} 
      />
    </div>
  );
}
