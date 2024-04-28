import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // Function to toggle the state of inCart
  const toggleCart = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Change button text based on whether the item is in the cart or not */}
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
