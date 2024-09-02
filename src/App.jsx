import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <DateCounter />
    </div>
  );
};

const DateCounter = () => {
  const [inputCount, setInputCount] = useState(0);
  const [inputRange, setInputRange] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + inputCount);

  const handleReset = () => {
    setInputCount(0);
    setInputRange(1);
  };

  return (
    <div>
      <input
        type="range"
        value={inputRange}
        min={1}
        max={10}
        onChange={(e) => setInputRange(e.target.value)}
      />
      <span>{inputRange}</span>

      <div>
        <button onClick={() => setInputCount((i) => i - inputRange)}>-</button>
        <input
          type="text"
          value={inputCount}
          onChange={(e) => setInputCount(Number(e.target.value))}
        />
        <button onClick={() => setInputCount((i) => i + inputRange)}>+</button>
      </div>
      <div>
        <p>
          <span>
            {inputCount === 0
              ? `today is ${date.toDateString()}`
              : inputCount > 0
              ? `${inputCount} days from today is ${date.toDateString()}`
              : `${Math.abs(
                  inputCount
                )} day from today was ${date.toDateString()}`}
          </span>
        </p>
        {inputCount !== 0 || inputRange !== 1 ? (
          <button onClick={handleReset}>RESET</button>
        ) : null}
      </div>
    </div>
  );
};

export default App;
