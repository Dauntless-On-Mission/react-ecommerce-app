import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { clearItems } from "../redux/slice/cart";

export const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.cart.items);

  if (state.length === 0) {
    return "No Products in cart";
  }

  const calulateTotalProducts = () => {
    let count = 0;
    state.forEach(item => {
      count += item.quantity;
    });
    return count;
  };

  const calulateTotalPrice = () => {
    let count = 0;
    state.forEach(item => {
      count += item.price * item.quantity;
    });
    return count;
  };

  return (
    <div className="p-5">
      <button
        onClick={() => {
          dispatch(clearItems());
        }}
      >
        Clear Cart
      </button>

      <h2>Total Products: {calulateTotalProducts()}</h2>
      <h2>Total Price: {calulateTotalPrice()}</h2>

      <div className="d-flex justify-content-centent flex-wrap">
        {state.map(item => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
            item={item}
            isCart={true}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};
