import { useContext, useEffect } from "react"
import { AuthContext } from "../../../contexts/AuthContext"

export default function DashboardPage() {
  const { user } = useContext(AuthContext)
  
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Seja bem vindo!</h2>
      <h2>Olá, {user?.name}</h2>
      <h2>Email: {user?.email}</h2>
    </>
  )
}