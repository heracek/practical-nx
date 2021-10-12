import React from 'react';
import {
  Button,
  QuackText,
  SelectableQuackWrapper,
  UserName,
  UserUserName,
} from 'src/atoms/';

export function SelectableQuack({ quack, isSelected, onSelect }) {
  return (
    <SelectableQuackWrapper isSelected={isSelected}>
      <div className="flex-auto">
        <UserName name="John Doe" /> <UserUserName userName="johdoe" />
        <QuackText>{quack.text}</QuackText>
      </div>
      <div className="pt1 pl2">
        <Button onClick={onSelect}>Select</Button>
      </div>
    </SelectableQuackWrapper>
  );
}
