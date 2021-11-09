import React from 'react';

import { Button } from 'src/atoms/';
import { useCounterContext } from 'src/utils/CounterContext';

export function CounterContextWidget() {
  const { counter, increment } = useCounterContext();

  return (
    <p>
      CounterContext: {counter}
      <Button className="ml2" onClick={increment}>
        +1
      </Button>
    </p>
  );
}
