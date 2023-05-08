interface userDataProps{
    user: string;
    email: string;
    password: string;
    dataPolicyCheck: boolean;
}

export default function addUser(userData:userDataProps){
    console.log(userData)
}