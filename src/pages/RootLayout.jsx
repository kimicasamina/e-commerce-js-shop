import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout({ cart }) {
  return (
    <>
      <Navbar totalItems={cart?.total_items} />
      <main className="h-screen pt-[56px] bg-secondary">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
