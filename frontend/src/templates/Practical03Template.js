import React from 'react';

import { ErrorMessage } from 'src/atoms/';
import { SelectableQuack } from 'src/molecules/';

export function Practical03Template({
  quacksState,
  selectedQuackId,
  setSelectedQuackId,
}) {
  if (quacksState.loading) {
    return <div>Loading...</div>;
  }

  if (quacksState.error) {
    return <ErrorMessage>{quacksState.error.message}</ErrorMessage>;
  }

  return (
    <div>
      {quacksState.data.quacks.map((quack) => (
        <SelectableQuack
          key={quack.id}
          quack={quack}
          isSelected={selectedQuackId === quack.id}
          onSelect={() => setSelectedQuackId(quack.id)}
        />
      ))}
    </div>
  );
}
