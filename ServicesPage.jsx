import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import "./serice/Categories.css";
import "./serice/all.css";
import ved from './vedio/ct.mp4';

const ServicesPage = () => {
    const categories = [
        { name: "Agriculture Tools", image: "path-to-image" },
        { name: "Organic Fertilizers", image: "path-to-image" },
        { name: "Organic Seeds", image: "path-to-image" },
    ];

    const products = [
        {
            name: "Tomato Seeds",
            price: 50,
            image: "https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png",
        },
        {
            name: "Pumpkin Seeds",
            price: 60,
            image: "https://orgboxthailand.com/wp-content/uploads/2018/02/pumpkin.png",
        },
        {
            name: "Carrot Seeds",
            price: 40,
            image: "https://www.themeatbox.co.nz/cdn/shop/files/TMBProductImages_23_1024x1024.png?v=1705350837",
        },
        {
            name: "Brinjal Seeds",
            price: 70,
            image: "https://www.freeiconspng.com/thumbs/eggplant-png/best-eggplant-png-clipart-11.png",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [priceRange, setPriceRange] = useState([0, 5000]); // Min and max price
    const [cart, setCart] = useState([]);

    // Filter products by search term and price range
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            product.price >= priceRange[0] &&
            product.price <= priceRange[1]
    );

    // Add product to cart
    const handleAddToCart = (product) => {
        const existingProduct = cart.find((item) => item.name === product.name);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove product from cart
    const handleRemoveFromCart = (product) => {
        setCart(cart.filter((item) => item.name !== product.name));
    };

    // Increase product quantity
    const handleIncreaseQuantity = (product) => {
        setCart(
            cart.map((item) =>
                item.name === product.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease product quantity
    const handleDecreaseQuantity = (product) => {
        setCart(
            cart.map((item) =>
                item.name === product.name && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <div>
            <div>
                
            <div className="categories">
                
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
            </div>

            <div className="filter-search-container">
                {/* Filter Menu */}
                <div className="filter">
                    <h3>Filter</h3>

                    {/* Search Bar */}
                    <label>Search products : </label>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div><br></br>

                    {/* Price Range */}
                    <label>Price Range:</label>
                    <div className="price-range">
                        <span>₹{priceRange[0]}</span>
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            value={priceRange[0]}
                            onChange={(e) =>
                                setPriceRange([
                                    parseInt(e.target.value),
                                    priceRange[1],
                                ])
                            }
                        />
                        <span>₹{priceRange[1]}</span>
                        
                    </div>
                </div>
            </div>

            <div>
                {/* Product List */}
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div key={index} className="product-card">
                                <ProductCard product={product} />
                                <button onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </div>

                {/* Cart */}
                <Cart
                    cartItems={cart}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default ServicesPage;
