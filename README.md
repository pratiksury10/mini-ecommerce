# Mini E-commerce (React + Vite)

A front-end mini e-commerce app that consumes the [Fake Store API](https://fakestoreapi.com/).  
Built with React, React Router, Redux Toolkit, and localStorage caching.

## ✨ Features
- Product listing with search & category filter
- Product detail with rating and quantity selector (1–5)
- Shopping cart (thumbnail, unit price, qty 1–10, subtotal)
- Grand total + proceed to checkout
- Checkout form (name, email, address) with validation
- “Place Order” clears cart and shows confirmation
- Data caching in memory + localStorage (products, categories)
- Global state via Redux Toolkit

## 🧱 Project Structure
src/
components/
Navbar.jsx
ProductCard.jsx
pages/
Home.jsx
ProductDetail.jsx
Cart.jsx
Checkout.jsx
OrderHistory.jsx # optional
NotFound.jsx
redux/
store.js
productSlice.js
cartSlice.js
router/
AppRouter.jsx
App.jsx
main.jsx


## 🚀 Getting Started

```bash
npm install
npm run dev

Open the dev URL (usually http://localhost:5173)
