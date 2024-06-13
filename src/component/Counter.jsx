import { useState } from "react";
import AllButton from "./AllButton";

const Counter = () => {
  const [value, setValue] = useState(0);
  let addValue = () => {
    setValue((preValue) => preValue + 1);
  };
  let deleteValue = () => {
    if (value > 0) {
      setValue((preValue) => preValue - 1);
    } else {
      alert("Counter cannot go below zero!");
    }
  };
  let resetValue = () => {
    setValue(0);
  };
  return (
    <>
      <div className="container">
        <div className="counter">
          <h1>Counter</h1>
          <strong>{value}</strong>
          <AllButton
            addValue={addValue}
            deleteValue={deleteValue}
            resetValue={resetValue}
          />
        </div>
      </div>
    </>
  );
};

export default Counter;

