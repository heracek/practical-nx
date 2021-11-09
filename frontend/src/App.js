import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from 'src/atoms/';
import { AuthProvider } from 'src/utils/auth';
import { EnhancedApolloProvider } from 'src/utils/apollo';
import { Routes } from 'src/Routes';
import { CounterProvider } from 'src/utils/CounterContext';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EnhancedApolloProvider>
          <CounterProvider>
            <ScrollToTop />
            <Routes />
          </CounterProvider>
        </EnhancedApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
