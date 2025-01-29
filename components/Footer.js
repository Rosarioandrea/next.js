import { MapIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-black text-sm mt-24 text-white">

      <div className="flex flex-col md:flex-row justify-between gap-24">

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <Link href="/">
          <div> </div>
            <div className="text-4xl tracking-wide font-bold">coconut.</div>
          </Link>
          <p>Palermo, Buenos Aires, Argentina.</p>
          <span className="font-semibold">coconut@gmail.com</span>
          <span className="font-semibold">+54 11-3292-5115</span>
        </div>
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <Link href="/nosotros">Sobre Nosotros</Link>
              <Link href="/contacto">Contactanos</Link>
              <Link href="/product">Productos</Link>
              <Link href="">Reclamos y devoluciones</Link>
              <Link href="/">Home</Link>
            </div>
          </div>


        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUSCRIBITE</h1>
          <p>
            No te pierdas nuestras promociones!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Ingresa tu e-mail"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">Enviar</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© Copyright - Rosario Martinez</div>
      </div>
    </div>
  );
};

export default Footer;