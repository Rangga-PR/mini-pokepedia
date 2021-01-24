import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { TrainerProvider } from '@/context/trainerContext';
import { globalStyles } from '@/styles/global';
import theme from '@/styles/theme';
import { useApollo } from '@/hooks/useApollo';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient} suppressHydrationWarning>
      {globalStyles}
      <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null : (
          <ThemeProvider theme={theme}>
            <TrainerProvider>
              <Component {...pageProps} />
            </TrainerProvider>
          </ThemeProvider>
        )}
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
