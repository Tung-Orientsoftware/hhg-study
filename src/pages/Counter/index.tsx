import { useCallback, useState } from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const increseCounter = useCallback(function () {
    setCounter(value => value + 1)
  }, []);

  const resetCounter = useCallback(function () {
    setCounter(0)
  }, [])

  return (
    <div className="counter">
      <h1 className="title">Counter</h1>
      <h2>{counter}</h2>
      <div className="button-wrapper">
        <Button onClick={increseCounter}>Increase</Button>
        <Button onClick={resetCounter}>Reset</Button>
      </div>
      <Link to="/employees">Employee</Link>
    </div>
  );
};

export default Counter;