import React, { useState } from "react";
import '../styles/Nb.css'
import Background from '../assets/supermoon.jpg'

function NumBaseball() {
  const [count, setCount] = useState(10);
  const [num, setNum] = useState(pickNum());

  function pickNum() {
    let num = [];
    while (num.length < 4) {
      let random = Math.floor(Math.random() * 10);
      if (num.indexOf(random) === -1) num.push(random);
    }
    return num;
  }

  function toArray(n) {
    let arr = [];
    for (let i = 3; i >= 0; i--) {
      arr[i] = n % 10;
      if (isNaN(arr[i])) return false;
      n = Math.floor(n / 10);
    }
    return arr;
  }

  function printStrikeBall(arr, num) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 4; i++) {
      if (num.indexOf(arr[i]) === i) strike++;
      else if (num.indexOf(arr[i]) !== -1) ball++;
    }
    if (strike === 4) {
      alert("홈런!!!");
      reset();
      return;
    }
    alert(`${strike}스트라이크,${ball}볼 입니다.`);
    setCount(count - 1);
    if (count === 1) {
      alert(`횟수 초과!! 정답은 ${num}`);
      reset();
    }
  }

  function inputCheck(arr) {
    let check = [];
    for (let i = 0; i < 10; i++) check[i] = 0;
    for (let i = 0; i < 4; i++) {
      check[arr[i]]++;
    }
    for (let i = 0; i < 10; i++) if (check[i] > 1) return false;
    return true;
  }

  function reset() {
    setCount(10);
    setNum(pickNum());
  }

  function hint() {
    let ht = [];
    ht[0] = num[Math.floor(Math.random() * 4)];
    while (ht.length < 5) {
      let rand = Math.floor(Math.random() * 10);
      if (ht.indexOf(rand) === -1) ht.push(rand);
    }
    ht.sort((a, b) => b - a);
    alert(ht);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.input.value;
    if (input === "r") {
      reset();
      return;
    }
    if (input === "h") {
      hint();
      return;
    }
    if (input.length !== 4) {
      alert("4자리로 입력해주세요!");
      return;
    }
    const inp = toArray(input);
    if (!inp) {
      alert("숫자를 입력하세요!");
      return;
    }
    if (!inputCheck(inp)) {
      alert("중복된 숫자는 입력하지마세요!");
      return;
    }
    printStrikeBall(inp, num);
  }

  return (
    <div className = "nb">
        <div className = "nbTop" style={{backgroundImage:`url(${Background})`}}></div>
        <div className ="nbBottom">
      <h1>숫자 야구 게임</h1>
      <h3>{count}회 남았습니다.</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input">
        </input>
        </form>
        </div>
        </div>
  )
};

export default NumBaseball;