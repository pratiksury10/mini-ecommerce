import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ width:"1400px", margin: "80px auto 0", padding: "32px", marginBottom:"200px" }}>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#2d2d2d",
          borderBottom: "2px solid #ddd",
          paddingBottom: "12px",
        }}
      >
        Order History
      </h2>

      {orders.length === 0 ? (
        <p style={{ color: "#777", fontSize: "18px", textAlign: "center" }}>
          No orders found.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // FIXED 3 per row
            gap: "24px",
          }}
        >
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "16px",
                background: "#fff",
                padding: "24px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.2s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)")
              }
            >
              {/* Order Header */}
              <div style={{ marginBottom: "16px", fontSize: "14px", color: "#555" }}>
                <p>
                  <span style={{ fontWeight: "600" }}>Order ID:</span> {order.id}
                </p>
                <p>
                  <span style={{ fontWeight: "600" }}>Date:</span> {order.date}
                </p>
              </div>

              {/* Total */}
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "16px",
                }}
              >
                Total:{" "}
                <span style={{ color: "#16a34a" }}>
                  ₹{order.total.toFixed(2)}
                </span>
              </p>

              {/* Items */}
              <div>
                <h4
                  style={{
                    fontWeight: "600",
                    marginBottom: "12px",
                    color: "#444",
                  }}
                >
                  Items
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "8px",
                        borderBottom: "1px solid #eee",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          maxWidth: "65%",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: "#555",
                        }}
                      >
                        {item.name || "Unnamed Item"}
                      </span>
                      <span style={{ fontWeight: "500", color: "#444" }}>
                        ₹{item.price} × {item.quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;





// import React, { useEffect, useState } from "react";

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(savedOrders);
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto p-8 mt-20">
//       <h2 className="text-3xl font-bold mb-10 text-gray-800 border-b pb-4">
//         Order History
//       </h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-500 text-lg text-center">No orders found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-xl transition"
//             >
//               {/* Order Header */}
//               <div className="mb-4">
//                 <p className="text-sm text-gray-500">
//                   <span className="font-semibold">Order ID:</span> {order.id}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <span className="font-semibold">Date:</span> {order.date}
//                 </p>
//               </div>

//               {/* Total */}
//               <p className="text-lg font-bold text-gray-800 mb-4">
//                 Total:{" "}
//                 <span className="text-green-600">
//                   ₹{order.total.toFixed(2)}
//                 </span>
//               </p>

//               {/* Items */}
//               <div>
//                 <h4 className="font-semibold text-gray-700 mb-3">Items</h4>
//                 <ul className="space-y-2">
//                   {order.items.map((item, index) => (
//                     <li
//                       key={index}
//                       className="flex justify-between items-center text-gray-600 border-b pb-2 last:border-0"
//                     >
//                       <span className="truncate w-2/3">{item.name || "Unnamed Item"}</span>
//                       <span className="font-medium">
//                         ₹{item.price} × {item.quantity}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;










// import React, { useEffect, useState } from "react";

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(savedOrders);
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Order History</h2>
      
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div key={order.id} className="border p-3 rounded-lg shadow">
//               <p><strong>Order ID:</strong> {order.id}</p>
//               <p><strong>Date:</strong> {order.date}</p>
//               <p><strong>Total:</strong> ₹{order.total.toFixed(2)}</p>
              
//               <div className="mt-2">
//                 <strong>Items:</strong>
//                 <ul className="list-disc pl-6">
//                   {order.items.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - ₹{item.price} × {item.quantity}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;
