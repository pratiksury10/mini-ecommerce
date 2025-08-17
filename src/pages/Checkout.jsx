// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState({});

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.address.trim()) e.address = "Address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // ✅ Create new order object
    const newOrder = {
      id: Date.now(),
      customer: { ...form },
      items,
      total,
      date: new Date().toLocaleString(),
    };

    // ✅ Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // ✅ Clear cart
    dispatch(clearCart());

    alert("Order placed successfully!");
    navigate("/history"); // redirect to Order History page
  };

  if (!items || items.length === 0) {
    return (
      <div style={{ padding: 20, marginBottom:"400px" }}>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, marginBottom:"300px", width:"1200px" }}>
      <h1>Checkout</h1>

      {/* Order Summary */}
      <div style={{ marginTop: 16, marginBottom: 24 }}>
        <h2>Order Summary</h2>
        <div style={{ border: "1px solid #ddd", borderRadius: 6, overflow: "hidden" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 80px 100px",
              gap: 10,
              padding: "10px",
              background: "#f8f8f8",
              fontWeight: 600,
            }}
          >
            <div>Item</div>
            <div>Price</div>
            <div>Qty</div>
            <div>Subtotal</div>
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 100px 80px 100px",
                gap: 10,
                padding: "10px",
                borderTop: "1px solid #eee",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  width="40"
                  height="40"
                  style={{ objectFit: "contain" }}
                />
                <span>{item.title}</span>
              </div>
              <div>${item.price.toFixed(2)}</div>
              <div>{item.quantity}</div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 12,
              fontWeight: 700,
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{ display: "grid", gap: 12, maxWidth: 680 }}
      >
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            style={{ width: "100%", padding: 8 }}
          />
          {errors.name && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.name}</div>
          )}
        </div>

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 8 }}
          />
          {errors.email && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
          )}
        </div>

        <div>
          <label>Address</label>
          <br />
          <textarea
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Street, City, State, ZIP"
            rows={3}
            style={{ width: "100%", padding: 8 }}
          />
          {errors.address && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.address}</div>
          )}
        </div>

        <button type="submit" style={{ padding: "10px 14px" }}>
          Place Order
        </button>
      </form>
    </div>
  );
}









// // src/pages/Checkout.jsx
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../redux/cartSlice";
// import { useNavigate } from "react-router-dom";

// export default function Checkout() {
//   const items = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({ name: "", email: "", address: "" });
//   const [errors, setErrors] = useState({});

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Name is required";
//     if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email is required";
//     if (!form.address.trim()) e.address = "Address is required";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (!validate()) return;

//     // No backend: just simulate success
//     dispatch(clearCart());
//     alert("Order placed successfully!");
//     navigate("/"); // back to home
//   };

//   if (!items || items.length === 0) {
//     return (
//       <div style={{ padding: 20 }}>
//         <h1>Checkout</h1>
//         <p>Your cart is empty.</p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
//       <h1>Checkout</h1>

//       {/* Order Summary */}
//       <div style={{ marginTop: 16, marginBottom: 24 }}>
//         <h2>Order Summary</h2>
//         <div style={{ border: "1px solid #ddd", borderRadius: 6, overflow: "hidden" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 80px 100px", gap: 10, padding: "10px", background: "#f8f8f8", fontWeight: 600 }}>
//             <div>Item</div><div>Price</div><div>Qty</div><div>Subtotal</div>
//           </div>
//           {items.map((item) => (
//             <div key={item.id} style={{ display: "grid", gridTemplateColumns: "1fr 100px 80px 100px", gap: 10, padding: "10px", borderTop: "1px solid #eee" }}>
//               <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//                 <img src={item.image} alt={item.title} width="40" height="40" style={{ objectFit: "contain" }} />
//                 <span>{item.title}</span>
//               </div>
//               <div>${item.price.toFixed(2)}</div>
//               <div>{item.quantity}</div>
//               <div>${(item.price * item.quantity).toFixed(2)}</div>
//             </div>
//           ))}
//           <div style={{ display: "flex", justifyContent: "flex-end", padding: 12, fontWeight: 700 }}>
//             Total: ${total.toFixed(2)}
//           </div>
//         </div>
//       </div>

//       {/* Checkout Form */}
//       <form onSubmit={handleSubmit} noValidate style={{ display: "grid", gap: 12, maxWidth: 520 }}>
//         <div>
//           <label>Name</label><br />
//           <input
//             type="text"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             placeholder="Your full name"
//             style={{ width: "100%", padding: 8 }}
//           />
//           {errors.name && <div style={{ color: "red", fontSize: 12 }}>{errors.name}</div>}
//         </div>

//         <div>
//           <label>Email</label><br />
//           <input
//             type="email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             placeholder="you@example.com"
//             style={{ width: "100%", padding: 8 }}
//           />
//           {errors.email && <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>}
//         </div>

//         <div>
//           <label>Address</label><br />
//           <textarea
//             value={form.address}
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//             placeholder="Street, City, State, ZIP"
//             rows={3}
//             style={{ width: "100%", padding: 8 }}
//           />
//           {errors.address && <div style={{ color: "red", fontSize: 12 }}>{errors.address}</div>}
//         </div>

//         <button type="submit" style={{ padding: "10px 14px" }}>
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// }






// import { useSelector } from "react-redux";

// export default function CheckoutPage() {
//   const cartItems = useSelector((state) => state.cart.items);

//   return (
//     <div>
//       <h2>Checkout</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ₹{item.price} × {item.quantity}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }









// export default function Checkout() {
//   return (
//     <div>
//       <h1>Checkout Page</h1>
//     </div>
//   );
// }
