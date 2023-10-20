import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ReduxProvider from '@/redux/redux-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}
