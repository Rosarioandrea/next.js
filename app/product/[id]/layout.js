import Link from "next/link"

export default function ProductLayout ({children}) {
    return (
        <div>
            <aside>
                <h2>Filtros</h2>
                <Link href="/product/cat/electro"></Link>
                <Link href="/product/cat/hogar"></Link>
            </aside>
            <div>
                {children}
            </div>
        </div>
    )
}