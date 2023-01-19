import React, { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("render");
  },[count1,count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      ></button>
      <h1>{count1}</h1>
    </div>
  );
};

export default Home;
