import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Practical03Template } from 'src/templates/Practical03Template';

const QUACKS_QUERY = gql`
  query Quacks {
    quacks {
      id
      text
      user {
        userName
        name
      }
    }
  }
`;

export function Practical03() {
  const quacksState = useQuery(QUACKS_QUERY);
  const [selectedQuackId, setSelectedQuackId] = useState(null);
  const { loading, refetch } = quacksState;

  useEffect(() => {
    if (loading) return;

    const timeoutId = setTimeout(() => {
      refetch();
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading, refetch]);

  return (
    <Practical03Template
      quacksState={quacksState}
      selectedQuackId={selectedQuackId}
      setSelectedQuackId={setSelectedQuackId}
    />
  );
}
