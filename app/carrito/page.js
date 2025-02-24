"use client";

import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import { CartContext } from "@/providers/CartProvider"; // Asegúrate de que la ruta es correcta
import Link from "next/link";
import { useContext } from "react";

function CarritoPage() {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        console.error("CartContext no está disponible. Asegúrate de que el proveedor lo envuelve correctamente.");
        return <p>Error al cargar el carrito.</p>;
    }

    const { cart } = cartContext;

    return (
        <>
            <PageTitle>Mi Carrito</PageTitle>
            {cart.length > 0 ? (
                <div className="flex flex-col p-6 space-y-4 sm:p-10">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y dark:divide-gray-300">
                        {cart.map((producto) => (
                            <li key={producto.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img className="w-20 h-20 sm:w-32 sm:h-32" src={producto.image} alt={producto.name} />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <h3 className="text-lg font-semibold">{producto.name}</h3>
                                            <p className="text-lg font-semibold">${producto.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button className="p-4 bg-black/90 shadow-md rounded-sm text-white hover:bg-black/20 transition-colors">
                        <Link href="/checkout">Proceder al pago</Link>
                    </Button>
                </div>
            ) : (
                <Button className="p-4 bg-black/90 shadow-md rounded-sm text-white hover:bg-black/20 transition-colors">
                    <Link href="/products">Carrito vacío.</Link>
                </Button>
            )}
        </>
    );
}

export default CarritoPage;

