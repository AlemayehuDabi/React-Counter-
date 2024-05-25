import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter++);
  };

  const Decrement = () => {
    setCounter(counter--);
  };

  let [Display, setDisplay] = useState();

  useEffect(() => {
    setDisplay(counter);
  }, [counter]);

  let postOrNega = "";

  if (counter > 0) {
    postOrNega = "POSITIVE";
  } else if (counter < 0) {
    postOrNega = "NEGATIVE";
  } else {
    postOrNega = "NEITHER";
  }

  return (
    <div className="App">
      <div className="btn">
        <button onClick={Decrement}>-</button>
        <p>{counter}</p>
        <button onClick={Increment}>+</button>
      </div>
      <div>
        <h1>
          The Number is:
          <span>{Display}</span>
        </h1>
        <h1>
          Number type:<span>{postOrNega}</span>
        </h1>
      </div>
    </div>
  );
};

export default App;
