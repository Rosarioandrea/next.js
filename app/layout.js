import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthContextProvider from "@/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import CartContextProvider from "@/providers/CartProvider";


export const metadata = {
  title: {
    template: "Coder-Commerce - %s",
    default: "Coder-Commerce",
  },
  authors: [{ name: "Rosario Martinez" }],
  description: "Aplicacion de comercio electrónico",
  keywords: "comercio electrónico, aplicación, nextjs, tailwind, sass, react, lucide, tailwindcss, Rosario Martinez, programador, argentina, ecommerce"
}

function RootLayout ({children}){
  return(
    <html lang="en">
      <body className="bg-background min-h-screen flex flex-col">



        <AuthContextProvider>
        <CartContextProvider>
        <Header/>
        <main className="grow p-4">
        {children}
        </main>
        
        <Footer/>
        <ToastContainer />
        </CartContextProvider>
        </AuthContextProvider>
        
      </body>
    </html>
  );
}

export default RootLayout


