import UserInput from "../UserInput"
import EmailInput from "../EmailInput"
import PasswordInput from "../PasswordInput"
import ButtonSubmit from "../ButtonSubmit"

import { useState } from 'react'

import styles from "./styles.module.scss"
import user_validator from "@/utils/validators/user"

export function RegisterUserPage(){
    const[geralError,setGeralError] = useState("")

    const[user,setUser] = useState("")
    const[userError,setUserError] = useState(false)
    const[userErrorMessage, setUserErrorMessage] = useState("")

    const[email,setEmail] = useState("")
    const[emailError,setEmailError] = useState(false)

    const[password,setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const[errorPassword, setErrorPassword] = useState(false)


    const handleUserChange = (value:string) => {
        setUser(value);
    };

    const handleEmailChange = (value:string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value:string) => {
        setPassword(value);
    };
    
    const handleConfirmPasswordChange = (value:string) => {
        setConfirmPassword(value);

        if(!(password === confirmPassword)){
            
            
        }
    };

    function register(e:any){
        e.preventDefault()
        
        setGeralError("")
        setUserError(false)
        setEmailError(false)
        setErrorPassword(false)

        if(!user && !email){
            setGeralError("Preencha o Usuário ou o email")
            return
        }
        
        

        user_validator(user)
        .then(result => {
            if(!result.success){
                setUserErrorMessage(result.message)
                setUserError(true)
            }

        })
        .catch(error => {
            setGeralError("Erro ao buscar usuário")
        });

    }

    return(

        <div className={styles.formLoginContainer}>
            <h1>register</h1>
            <div className={styles.formContent}>
                <form onSubmit={register}>

                    <UserInput onChangeFunction={ handleUserChange } user = { user } isRequired={false}  error = {userError} errorMessage={userErrorMessage}>Usuário</UserInput>
                    <EmailInput onChangeFunction={ handleEmailChange } email = { email } isRequired={false} error = {emailError}>Email</EmailInput>
                    <PasswordInput onChangeFunction={ handlePasswordChange } password={ password }  error = {errorPassword}></PasswordInput>
                    <PasswordInput onChangeFunction={ handleConfirmPasswordChange } password={ confirmPassword } error = {errorPassword}></PasswordInput>
                    
                    <div className={styles.spanDiv}>
                        <span>{geralError ? geralError : ""}</span>
                    </div>

                    <div className={styles.buttonSubmitContainer}>
                        <ButtonSubmit>Cadastrar</ButtonSubmit>
                    </div>

                </form>
            </div>
        </div>
    )
}