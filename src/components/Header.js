import React from "react";
import { HiHeart } from "react-icons/hi";

export const Header = () => {
  return (
    <div className="bg-info d-flex justify-content-between align0items-center text-white p-3 px-5">
      <div className="h2">Ecommerce App</div>
      <div className="text-danger d-flex align-items-center">
        <HiHeart size={35} />
      </div>
    </div>
  );
};
