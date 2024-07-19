import React, { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <main className="bg-background w-full min-h-screen">
      <Navbar />
      <Products products={products} />
    </main>
  );
}

export default App;
