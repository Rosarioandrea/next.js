import PageTitle from "@/components/PageTitle";
import { Link } from "lucide-react";

export default  async function ProductDetailsPage({params}) {
    const {id} =await params
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const productDetail = await data.json ()

    if(productDetail.message){
        return(
            <div className="flex flex-col items-center space-y-8">
            <PageTitle className="text-4xl font-bold text-center text-primary">Producto no encontrado</PageTitle>
            <p className="text-4xm font-bold text-center text-primary"> El producto con el id {id} no existe, intentalo de nuevo.</p>
            <Link href="/product" className="p-4 bg-secondary/70 shadow-md rounded-sm text-white hover:bg-secondary/90 transition-colors">Volver a productos</Link>
            </div>
        )
    }

    console.log(productDetail)
    

    return(
        <PageTitle>Detalle del producto {id}</PageTitle>
    );
}