import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = {
items: [], // each: { id, name, price, image, category, quantity }
};


const cartSlice = createSlice({
name: "cart",
initialState,
reducers: {
addToCart: (state, action) => {
const item = action.payload; // {id, name, price, image, category}
const existing = state.items.find((i) => i.id === item.id);
if (!existing) {
state.items.push({ ...item, quantity: 1 });
}
// If already in cart, do nothing so the Product button remains disabled after first add
},
increment: (state, action) => {
const id = action.payload;
const found = state.items.find((i) => i.id === id);
if (found) found.quantity += 1;
},
decrement: (state, action) => {
const id = action.payload;
const idx = state.items.findIndex((i) => i.id === id);
if (idx !== -1) {
const item = state.items[idx];
if (item.quantity > 1) item.quantity -= 1;
else state.items.splice(idx, 1);
}
},
removeItem: (state, action) => {
const id = action.payload;
state.items = state.items.filter((i) => i.id !== id);
},
clearCart: (state) => {
state.items = [];
},
},
});


export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions;


// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = createSelector([selectCartItems], (items) =>
items.reduce((sum, i) => sum + i.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (items) =>
items.reduce((sum, i) => sum + i.price * i.quantity, 0)
);


export default cartSlice.reducer;