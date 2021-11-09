import React, { useCallback, useContext, useMemo, useState } from 'react';

const CounterContext = React.createContext({
  counter: 0,
  increment: () => {
    console.error('Error: Using default implementation');
  },
});

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  const contextValue = useMemo(
    () => ({
      counter,
      increment,
    }),
    [counter, increment],
  );

  return <CounterContext.Provider value={contextValue} children={children} />;
}

export function useCounterContext() {
  return useContext(CounterContext);
}
