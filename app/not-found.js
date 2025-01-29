import Link from "next/link";

const NotFoundPage = () => {
    return (
    <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-center text-black">
        Pagina no encontrada.
        </h1>
        <Link
        href="/" className="p-4 bg-black/90 shadow-md rounded-sm text-white hover:bg-black/20 transition-colors">
        Volver al Home
        </Link>
    </div>
    );
};

export default NotFoundPage;