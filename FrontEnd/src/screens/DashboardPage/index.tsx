import { useContext } from "react"

import { AuthContext } from "../../../contexts/AuthContext"
import { parseCookies } from "nookies"

export default function DashboardPage(props : any){
    const { user } = useContext(AuthContext)

    return(
        <>
            <h1>Dashboard</h1>
            <h2>Seja bem vindo!</h2>
            <h2>Olá, {user?.name}</h2>
            <h2>Email: {user?.email}</h2>
        </>
    )
}

export function getServerSideProps(ctx : any) {
    //faltou subir o servidor para testar
    const { ["sistema_gerenciamento.token"] : token } = parseCookies(ctx);
    console.log("oi")
    console.log(ctx.req.cookies)

    if(!token){
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }

    return {
        props: {},
    }

}
