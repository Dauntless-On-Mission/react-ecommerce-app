import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { fetchAllProducts } from "../redux/slice/products";

export const ProductListing = () => {
  const items = useSelector(state => state.products.items);
  const loading = useSelector(state => state.products.loading);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (items.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="d-flex flex-wrap bg-light justify-content-center"
      style={{ width: "fit-content", margin: "auto" }}
    >
      {items ? (
        items.map(item => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
            item={item}
          />
        ))
      ) : (
        <div>No items found!</div>
      )}
    </div>
  );
};
