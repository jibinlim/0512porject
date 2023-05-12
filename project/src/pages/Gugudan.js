import React, { useState } from "react";
import '../styles/Gugudan.css'
import Background from '../assets/island.jpg'

function Gugudan() {
  const [num1, setNum1] = useState(Math.ceil(Math.random() * 9));
  const [num2, setNum2] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (parseInt(value) === num1 * num2) {
      setResult(`정답입니다! ${num1} × ${num2} = ${num1 * num2}`);
      setNum1(Math.ceil(Math.random() * 9));
      setNum2(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("틀렸습니다. 다시 시도해보세요.");
      setValue("");
    }
  }

  return (
    <div className = "gugudan">
       <div className="gugudanTop" style={{backgroundImage:`url(${Background})`}}></div>
       <div className = "gugudanBottom">
      <h1 className = "gugudanBottom">구구단 게임</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {num1} × {num2} ={" "}
          <input type="number" value={value} onChange={handleChange} />
        </label>
        <button type="submit">입력</button>
      </form>
      <p>{result}</p>
      </div>
    </div>
  );
}

export default Gugudan;
