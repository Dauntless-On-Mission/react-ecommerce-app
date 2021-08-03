import React from "react";

const ProductCard = ({ image, title, price }) => {
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
        <p>{price}</p>
        <a href="#" className="btn btn-primary">
          Add to favorite
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
