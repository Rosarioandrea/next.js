"use client"; // Añadir esta línea

import { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    // Funciones para manejar el carrito
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter((p) => p.id !== product.id));
    };

    const handleClearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart, handleClearCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
