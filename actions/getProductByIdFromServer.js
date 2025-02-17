import { db } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export const getProductByIdFromServer = async (id) => {
    if (!id) {
        return {
            payload: null,
            error: true,
            message: "El ID del producto no es válido."
        };
    }

    try {
        const productsCollection = collection(db, "products");
        const docRef = doc(productsCollection, id);
        const query = await getDoc(docRef);

        if (!query.exists()) {
            return {
                payload: null,
                error: true,
                message: `El producto con ID ${id} no fue encontrado.`,
            };
        }

        const producto = query.data();
        producto.id = id;

        return {
            payload: producto,
            error: false,
            message: "Producto obtenido exitosamente.",
        };
    } catch (error) {
        console.error("Error al obtener el producto:", error);

        return {
            payload: null,
            error: true,
            message: "Ocurrió un error al obtener el producto.",
        };
    }
};