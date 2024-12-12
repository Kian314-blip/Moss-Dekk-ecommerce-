import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './store';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      // if (itemIndex > -1) {
      //   state.items[itemIndex].purchaseAmount = action.payload.purchaseAmount;
      // } else {
        state.items = [];
        // state.items.push(action.payload);
        state.items = [action.payload];
      // }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setItems: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product) {
        product.purchaseAmount += 1;
      }
    },
    decrementAmount: (state, action: PayloadAction<number>) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product && product.purchaseAmount > 1) {
        product.purchaseAmount -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, setItems, incrementAmount, decrementAmount } = cartSlice.actions;
export default cartSlice.reducer;
