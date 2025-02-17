"use client"

import { AuthContext } from "@/providers/AuthProvider"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"

function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { handleLogin, loggedIn } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (loggedIn) {
            router.push("/")
        }
    }, [loggedIn])


    const metodos = {
        "email": setEmail,
        "password": setPassword,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
    }

    const handleChange = (e) => {
        const valor = e.target.value
        const name = e.target.name
        metodos[name](valor)
    }

    return (
        <section className="grow grid place-content-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input type="text" name="email" id="email" placeholder="Escribe tu email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" onChange={handleChange} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Escribe tu contraseña" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" onChange={handleChange} />
                    </div>
                    <button className="p-4 bg-black/90 shadow-md rounded-sm text-white hover:bg-black/20 transition-colors">Ingresar</button>
                </form>
            </div>
        </section>
    )
}
export default LoginPage