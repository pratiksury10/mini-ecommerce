// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!items || items.length === 0) {
    return <p style={{ padding: "30px", marginBottom:"400px", width:"1000px" }}>Your cart is empty.</p>;
  }

  const grandTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
     <div style={{ padding: "30px", marginBottom:"300px", width:"1000px" }}>
      <h1>Your Cart</h1>

      {items.map((item) => {
        const subtotal = (item.price * item.quantity).toFixed(2);
        return (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 130px 110px 100px",
              gap: "10px",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
              padding: "10px 0"
            }}
          >
            <img src={item.image} alt={item.title} width="60" height="60" style={{ objectFit: "contain" }} />
            <div>{item.title}</div>
            <div>${item.price.toFixed(2)}</div>

            {/* qty selector 1–10 */}
            <input
              type="number"
              min="1"
              max="10"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, Math.min(10, Number(e.target.value) || 1)) }))
              }
              style={{ width: "40px" }}
            />

            <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-end" }}>
              <strong>${subtotal}</strong>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          </div>
        );
      })}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, height:"50px" }}>
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <div style={{ textAlign: "right" }}>
          <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
          <button onClick={() => navigate("/checkout")} style={{ marginTop: 8 }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}








// // src/pages/Cart.jsx
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";

// export default function Cart() {
//   const items = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   if (items.length === 0) {
//     return <p style={{ padding: "20px" }}>Your cart is empty.</p>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Your Cart</h1>
//       {items.map((item) => (
//         <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
//           <img src={item.image} alt={item.title} width="50" style={{ marginRight: "10px" }} />
//           {item.title} - ${item.price} x{" "}
//           <input
//             type="number"
//             min="1"
//             value={item.quantity}
//             onChange={(e) =>
//               dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
//             }
//             style={{ width: "50px" }}
//           />
//           <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: "10px" }}>
//             Remove
//           </button>
//         </div>
//       ))}
//       <br />
//       <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//     </div>
//   );
// }








// import React from "react";

// export default function Cart() {
//   return (
//     <div>
//       <h1>Cart Page</h1>
//     </div>
//   );
// }
