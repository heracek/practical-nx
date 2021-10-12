import React, { useState } from 'react';

import { Button, Heading } from 'src/atoms';

export function Practical01() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Heading>Practical 01</Heading>
      <p>Counter: {counter}</p>
      <Button onClick={() => setCounter(counter + 1)}>+1</Button>
      <Button onClick={() => setCounter(0)}>Reset</Button>
      <Button onClick={() => setCounter(counter - 1)}>-1</Button>
    </div>
  );
}
