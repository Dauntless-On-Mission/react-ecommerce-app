import React from "react";
import { useDispatch } from "react-redux";
import { addItem, changeQuantity } from "../redux/slice/cart";

const ProductCard = ({
  image,
  title,
  price,
  id,
  item,
  isCart,
  quantity = 1
}) => {
  const dispatch = useDispatch();
  return (
    <div className="card m-3" style={{ width: "255px" }}>
      <img
        src={image}
        className="p-3"
        alt={title}
        style={{ height: "250px", width: "250px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {title}
        </h5>
        <p>Price: ₹{price * quantity}</p>
        {isCart ? (
          <div className="d-flex">
            <button
              className="px-3"
              disabled={quantity <= 1}
              onClick={() => {
                dispatch(changeQuantity({ id, isIncrease: false }));
              }}
            >
              -
            </button>
            <div className="mx-3">Quantity: {quantity}</div>
            <button
              className="px-3"
              onClick={() => {
                dispatch(changeQuantity({ id, isIncrease: true }));
              }}
            >
              +
            </button>
          </div>
        ) : (
          <div
            className="btn btn-primary"
            onClick={() => {
              dispatch(addItem(item));
            }}
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
