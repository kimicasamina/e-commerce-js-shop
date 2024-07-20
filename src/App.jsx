import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";
import RootLayout from "./pages/RootLayout";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log("PRODUCTS:", products);
  console.log("CARTS:", cart);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cart={cart} />}>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Route>
    )
  );

  // <Navbar totalItems={cart?.total_items} />
  // {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
  // <Cart cart={cart} />
  return <RouterProvider router={router} />;
}

export default App;
