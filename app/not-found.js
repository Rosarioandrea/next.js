import Link from "next/link";

const NotFoundPage = () => {
    return (
    <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary">
        Pagina no encontrada.
        </h1>
        <Link
        href="/" className="p-4 bg-secondary/70 shadow-md rounded-sm text-white hover:bg-secondary/90 transition-colors">
        Volver al Home
        </Link>
    </div>
    );
};

export default NotFoundPage;