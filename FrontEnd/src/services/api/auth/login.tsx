interface userObjectInterface{
    user: string;
    password: string;
    keepConnected: boolean;
}


export default function login(userObject: userObjectInterface){

    const base_URL = process.env.API_BASE_URL

    fetch(base_URL + "auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    }).then(
        (response) => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Erro ao fazer login")
            }
        }
    ).then(
        (data) => {
            console.log(data)
        }
    ).catch(
        (error) => {
            console.log(error)

    }
    )
}