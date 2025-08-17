// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: qty }));
    // Optional: redirect to cart page
    // navigate("/cart");
  };

  return (
    // <div style={{ padding: "20px", maxWidth: 900, margin: "0 auto" }}>
    <div style={{ padding: "20px"}}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <p>Rating: {product.rating?.rate} ⭐</p>

      <label>Quantity: </label>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <br /><br />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}








// // src/pages/ProductDetail.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//         const data = await res.json();
//         setProduct(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>Product not found</p>;

//   const handleAddToCart = () => {
//     dispatch(addToCart({ ...product, quantity: qty }));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>{product.title}</h1>
//       <img src={product.image} alt={product.title} width="200" />
//       <p>{product.description}</p>
//       <p><b>${product.price}</b></p>
//       <p>Rating: {product.rating?.rate} ⭐</p>

//       <label>Quantity: </label>
//       <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
//         {[1, 2, 3, 4, 5].map(num => (
//           <option key={num} value={num}>{num}</option>
//         ))}
//       </select>

//       <br /><br />
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// }










// export default function ProductDetail() {
//   return (
//     <div>
//       <h1>ProductDetail Page</h1>
//     </div>
//   );
// }
