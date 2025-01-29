import ContactForm from "@/components/ContactForm"
import PageTitle from "@/components/PageTitle"


function ContactoPage(){
    return(
        <section className="bg-no-repeat bg-cover bg-bott">
    <div className="container mx-auto p-20 bg-black bg-opacity-30 rounded"> 
        <h2 className="text-6xl font-bold text-white mb-3 text-center">
            Contactanos{""} 
        </h2>
        
        <p className="text-3xl text-white w-full  p-10 text-center">¡Dejanos tu mensaje!</p>
        <ContactForm/>
    </div>
</section>
    )
}

export default ContactoPage;


