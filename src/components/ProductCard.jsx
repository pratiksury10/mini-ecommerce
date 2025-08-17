import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
        <h3 style={{ fontSize: "14px" }}>{product.title}</h3>
        <p style={{ fontWeight: "bold" }}>${product.price}</p>
      </Link>
    </div>
  );
}
