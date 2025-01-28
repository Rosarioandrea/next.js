import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const Header = () => {
    return (
        <header className="px-2 py-4 flex justify-between items-center bg-primary shadow-md text-white ">
            <h1>Tienda Online</h1>
            <nav className="flex gap-4 font-bold">
            <Link href="/">Home</Link>
            <Link href="/product"> Productos</Link>
            <Link href="/nosotros"> Nosotros</Link>
            <Link href="/contacto"> Contacto</Link>
            <Link href="/admin"> Admin</Link>
            <Link href="/carrito"> <ShoppingCart/></Link>
            </nav>
        </header>

    )
}

export default Header