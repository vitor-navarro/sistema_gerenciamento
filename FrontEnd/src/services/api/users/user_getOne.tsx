import { api } from "../api"

export default function getOneUserByName(name:string){

    name = name.trim()

    api.get("user/getOneByName").then().catch()


}