import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchCategories } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { items, categories, status, error } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);

  const filteredItems = items.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>

      {/* Search and Category Filter */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Loading & Error */}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p style={{ color: "red" }}>{error}</p>}

      {/* Products Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
