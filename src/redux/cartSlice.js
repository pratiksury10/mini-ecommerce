import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: JSON.parse(localStorage.getItem("cartItems")) || []
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.items.find((i) => i.id === item.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...item, quantity: 1 });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((i) => i.id !== action.payload);
//       localStorage.setItem("cartItems", JSON.stringify(state.items));
//     },
//     clearCart: (state) => {
//       state.items = [];
//       localStorage.setItem("cartItems", JSON.stringify([]));
//     }
//   }
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;







// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.items.push({ ...action.payload });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
//       if (existingItem) {
//         existingItem.quantity = quantity;
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
