import React, { useState, useMemo } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCounterOne = () => {
    setCount(count + 1);
  };

  const incrementCounterTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count % 2 !== 0;
  }, [count]);

  return (
    <div>
      <button onClick={incrementCounterOne}>Counter One {count}</button>{' '}
      {isOdd ? 'Odd' : 'Even'}
      <br />
      <hr />
      <button onClick={incrementCounterTwo}>Counter Two {countTwo}</button>
    </div>
  );
}
