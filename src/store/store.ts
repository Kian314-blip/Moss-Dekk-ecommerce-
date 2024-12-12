import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';

export interface Product {
  id: number;
  brand: string;
  model: string;
  size: string;
  price: number;
  stock: number;
  season: string;
  fuel: string;
  speed: string;
  grip: string;
  noise: string;
  image: string;
  width: number;
  recommended: number;
  profile: number;
  inches: number;
  load: string;
  euClass: string;
  delay: number;
  description: string;
  category: string;
  purchaseAmount: number;
}

interface CartState {
  items: Product[];
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
