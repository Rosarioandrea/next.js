import ProductList from "@/components/ProductList";
import PageTitle from "@/components/PageTitle";

export default async function ProductPage() {
    const data = await fetch("https://dummyjson.com/products")
    const {products} = await data.json ()

    return (
    <div>
        <PageTitle>Productos</PageTitle>
        <ProductList productos= {products}/> 
    </div>
    );
}
