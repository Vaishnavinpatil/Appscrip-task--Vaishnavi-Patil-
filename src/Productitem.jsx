// ProductItem.js
import React from 'react';
import './ProductItem.css'; // Import the CSS file

const ProductItem = ({ name, price, image }) => {
    return (
        <article className="product">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price}</p>
            <button>Add to Cart</button>
        </article>
    );
};

export default ProductItem;
