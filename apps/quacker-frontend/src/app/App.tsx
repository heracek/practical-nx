import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from '@quacker/ui';
import { AuthProvider } from '@quacker/auth/context-ui';
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
