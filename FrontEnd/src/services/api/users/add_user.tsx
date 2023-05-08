interface userDataProps{
    user: string;
    email: string;
    password: string;
    dataPolicyCheck: boolean;
}

export default function addUser(userData:userDataProps){

    const baseURL = process.env.API_BASE_URL

    fetch(baseURL + "user/add",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name: userData.user,
            email: userData.email,
            password: userData.password,
            dataPolicyCheck: userData.dataPolicyCheck,
        })
    }).then(response =>{
        if(response.ok){
            return response.json()
        } else{
            throw new Error('Erro no servidor');
        }
    })
    .then(responseData =>{
        window.location.href = responseData.redirectTo;
    })
    .catch((error)=>{
        throw new Error('Erro no servidor');
    })
}