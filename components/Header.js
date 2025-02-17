import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <header className="px-2 py-4 flex justify-between items-center bg-black shadow-md text-white">
            <h1 className="font-bold p-4 text-4xl">coconut.</h1>
            <nav className="flex gap-15 ">
            <Link href="/">Home</Link>
            <Link href="/product"> Productos</Link>
            <Link href="/admin"> Admin</Link>
            <Link href="/contacto"> Contactanos</Link>
            <Link href="/carrito"> <ShoppingCart/></Link>
            </nav>
            <div className="p-2">
          <SearchBar />
        </div>
        </header>

    )
}
// <Link href="/admin"> Admin</Link> 

export default Header