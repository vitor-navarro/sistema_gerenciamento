interface userObjectInterface{
    user: string;
    password: string;
    remember: boolean;
}


export default function login(userObject: userObjectInterface){

    const base_URL = process.env.API_BASE_URL

    console.log(userObject.user)
    console.log(userObject.password)
    console.log(userObject.remember)
}