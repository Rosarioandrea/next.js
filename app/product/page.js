import { getProductByIdFromServer } from "@/actions/getProductByIdFromServer";
import { getProductsFromServer } from "@/actions/getProductsFromServer";
import AddToCartButton from "@/components/AddToCartButton";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const { payload: producto, error } = await getProductByIdFromServer(id);

    // Verifica si hubo error o el producto no existe
    if (error || !producto) {
        return {
            title: "Producto no encontrado"
        };
    }

    return {
        title: producto.name
    };
};

export const generateStaticParams = async () => {
    const params = await getProductsFromServer();
    return params;
};

export default async function ProductDetailsPage({ params }) {
    const { id } = await params;
    const { payload: producto, error } = await getProductByIdFromServer(id);

    // Si hubo error o el producto no se encuentra, muestra mensaje de error
    if (error || !producto) {
        return (
            <>
                <PageTitle>Producto no encontrado</PageTitle>
                <p>El producto con id {id} no existe, intentalo de nuevo</p>
                <Link href="/product">Volver a productos</Link>
            </>
        );
    }

    // En caso de que el producto exista
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        {/* Imagen dinámica o imagen de producto */}
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={producto.image || "https://dummyimage.com/400x400"} // Asegúrate de usar la propiedad correcta de imagen
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{producto.type}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{producto.name}</h1>
                            <p className="leading-relaxed">{producto.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {/* Botones de colores */}
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${producto.price}</span>
                            </div>
                            <AddToCartButton producto={producto} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

