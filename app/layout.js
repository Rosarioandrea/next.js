import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function RootLayout ({children}){
  return(
    <html lang="en">
      <body className="bg-background min-h-screen flex flex-col">
        <Header/>
        <main className="grow p-4">
        {children}
        </main>
        <Footer/>
        
      </body>
    </html>
  );
}

export default RootLayout