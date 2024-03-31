// ProductDisplay.js
import React from 'react';
import ProductItem from './Productitem';

const ProductDisplay = ({ products }) => {
    return (
        <section className="products">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductDisplay;

