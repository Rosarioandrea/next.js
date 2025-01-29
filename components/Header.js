import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const Header = () => {
    return (
        <header className="px-2 py-4 flex justify-between items-center bg-black shadow-md text-white">
            <h1 className="font-bold">coconut.</h1>
            <nav className="flex gap-4">
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