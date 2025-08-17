// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav style={{ padding: "10px", background: "#ddd" }}>
    <nav
  style={{
    width: "100%",
    background: "#f5f5f5",
    padding: "10px 20px",
    display: "flex",
    gap: "20px",
    alignItems: "center",
    position: "fixed",   // 👈 fix at top
    top: 0,
    left: 0,
    zIndex: 1000
  }}
>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/cart" style={{ marginRight: "20px" }}>Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}










// // Navbar.jsx
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav>
//       <h1>My Navbar</h1>
//     </nav>
//   );
// };

// export default Navbar;
