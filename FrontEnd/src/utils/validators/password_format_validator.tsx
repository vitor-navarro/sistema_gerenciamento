export function password_validator(password : string){
    if(password.length >= 7){
        return true
    } else{
        return false
    }

}