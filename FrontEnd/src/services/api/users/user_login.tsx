import { api } from '../api'

interface loginProps{
    user: string,
    password: string
}

export default function userLogin({user,password}:loginProps){
    
    api.post('auth/login', {
        user: user,
        password: password
    }).then(response =>{
        console.log("SUCCESS!", response.data)
    }).catch(error=>{
        console.log('FAILED...', error);
         
    })
    
}