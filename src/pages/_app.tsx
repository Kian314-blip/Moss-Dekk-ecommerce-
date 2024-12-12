import "@/styles/globals.css";
import "@/styles/fonts.css"
import "@/styles/media.css"
import "@/styles/main.css"

import type { AppProps } from "next/app";
// import { CartProvider } from '../components/CartContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';  // Import store and persistor

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
