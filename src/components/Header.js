import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-info d-flex justify-content-between align0items-center text-white p-3 px-5">
      <Link to="/" className="h2 text-white" style={{ textDecoration: "none" }}>
        DOM Ecommerce App
      </Link>
      <div className="d-flex align-items-center">
        <Link to="/cart" className="text-dark">
          <HiOutlineShoppingCart size={35} />
        </Link>
      </div>
    </div>
  );
};
