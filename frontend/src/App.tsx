import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from 'src/atoms/';
import { AuthProvider } from 'src/utils/auth';
import { EnhancedApolloProvider } from 'src/utils/apollo';
import { Routes } from 'src/Routes';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EnhancedApolloProvider>
          <ScrollToTop />
          <Routes />
        </EnhancedApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
