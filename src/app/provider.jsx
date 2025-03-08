import PropTypes from 'prop-types';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import queryConfig from '../lib/react-query'

export default function AppProvider({ children }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <React.Suspense>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
};
