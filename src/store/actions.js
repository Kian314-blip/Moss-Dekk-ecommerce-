// actions.js
export const UPDATE_PURCHASE_AMOUNT = 'UPDATE_PURCHASE_AMOUNT';
export const ADD_TO_CART = 'ADD_TO_CART';

// Action to update the purchase amount
export const updatePurchaseAmount = (amount) => ({
    type: UPDATE_PURCHASE_AMOUNT,
    payload: amount,
});

// Action to add the current purchaseAmount to the cart (pushes every time plus/minus is clicked)
export const addToCart = (purchaseAmount) => ({
    type: ADD_TO_CART,
    payload: purchaseAmount,
});
