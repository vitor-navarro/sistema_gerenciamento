

interface loginProps{
    user: string,
    password: string
}

export default function userLogin({user,password}:loginProps){
    
    fetch('auth/login', {
        user: user,
        password: password
    }).then(response =>{
        console.log("SUCCESS!", response.data)
    }).catch(error=>{
        console.log('FAILED...', error);
    })
    
}