// App.js
import React from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import Footer from './Footer';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 19.99,
        image: 'Product1.jpeg'
    },
    // Add more products as needed
];

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ProductDisplay products={products} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
