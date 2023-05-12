interface userObjectInterface{
    user: string;
    password: string;
}


export default function login(userObject: userObjectInterface){

    const base_URL = process.env.API_BASE_URL

    fetch(base_URL + "auth/login")

}